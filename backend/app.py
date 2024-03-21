from flask import Flask,jsonify,request
from flask_cors import CORS
from keras.models import load_model
from keras.initializers import Orthogonal
from joblib import load
import numpy as np
import pandas as pd

app = Flask(__name__)
cors = CORS(app, origins='*', supports_credentials=True)
model = load_model('football_predict.h5')

def pull_data():
    df = pd.read_csv('./Data/merged_football_data.csv')
    df["Date"] = pd.to_datetime(df["Date"], format="%d/%m/%Y")
    df["H_Team"] = df["HomeTeam"]
    df["A_Team"] = df["AwayTeam"]
    df['HomeTeam'] = df['HomeTeam'].astype('category').cat.codes
    df['AwayTeam'] = df['AwayTeam'].astype('category').cat.codes
    df["day_code"] = df["Date"].dt.dayofweek
    df["target"] = (df["FTR"] == "H").astype("int")
    df.loc[df["FTR"] == "D","target"] = 2

    return df

def averages_five_match_homeTeam(group, cols,new_cols):
    group = group.sort_values("Date")
    rolling_stats = group[cols].rolling(5,closed="left").mean()
    group[new_cols] = rolling_stats
    group = group.dropna(subset=new_cols)
    group = group.tail(1)
    group = group[["HomeTeam","HTHG_rolling",
               'HS_rolling',
               'HST_rolling',
               'HF_rolling',
               'HC_rolling',
               'HY_rolling',
               'HR_rolling']]
    return group

def averages_five_match_AwayTeam(group, cols,new_cols):
    group = group.sort_values("Date")
    rolling_stats = group[cols].rolling(5,closed="left").mean()
    group[new_cols] = rolling_stats
    group = group.dropna(subset=new_cols)
    group = group.tail(1)
    group = group[["AwayTeam","HTAG_rolling",
                          'AS_rolling',
                          'AST_rolling',
                          'AF_rolling',
                          'AC_rolling',
                          'AY_rolling',
                          'AR_rolling']]
    return group

predictors = ["day_code","HomeTeam","AwayTeam","HTHG","HTAG","HS_rolling","AS_rolling","HST_rolling",
              "AST_rolling","HF_rolling","AF_rolling","HC_rolling","AC_rolling",
              "HY_rolling","AY_rolling","HR_rolling","AR_rolling"]


def predict_match_result(Day_Of_Week,HomeTeam, AwayTeam):
    df = pull_data()
    df_matches_h = df.groupby("H_Team")
    group_h = df_matches_h.get_group(HomeTeam)
    cols_h = ["HTHG","HS","HST","HF","HC","HY","HR"]
    new_cols_h = [f"{c}_rolling" for c in cols_h]

    df_matches_a = df.groupby("A_Team")
    group_a = df_matches_a.get_group(AwayTeam)
    cols_a = ["HTAG","AS","AST","AF","AC","AY","AR"]
    new_cols_a = [f"{c}_rolling" for c in cols_a]

    data = averages_five_match_homeTeam(group_h,cols_h,new_cols_h)
    data = data.rename(columns = {"HTHG_rolling" : "HTHG"})
    data_a = averages_five_match_AwayTeam(group_a,cols_a,new_cols_a)
    data_a = data_a.rename(columns = {"HTAG_rolling" : "HTAG"})

    result = data.join(data_a, how="outer")
    result.fillna(result.shift(), inplace=True)
    if(len(result) >= 2):
      result.drop(result.index[0], inplace=True)
    result["day_code"] = Day_Of_Week
    result = result.reindex(columns=predictors)

    y_train_pred = model.predict(result)
    # winner= np.argmax(y_train_pred, axis=1)

    return y_train_pred*100

# API ROUTES
@app.route('/api/form',methods=['POST'])
def form():
    Day = int(request.json['Day'])
    HomeTeam = request.json['HomeTeam']
    AwayTeam = request.json['AwayTeam']
    Prediction = predict_match_result(Day,HomeTeam,AwayTeam)

    return jsonify({
        "Prediction" :  Prediction.tolist(),
    })

    # "Winner" :  winner.tolist(),
if __name__ == "__main__":
    app.run(debug=True)