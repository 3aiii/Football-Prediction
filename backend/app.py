from flask import Flask,jsonify,request
from flask_cors import CORS
from keras.models import load_model
from joblib import load
import numpy as np

app = Flask(__name__)
cors = CORS(app, origins='*', supports_credentials=True)
# model = load_model('football_predict.h5')

# averages_five_match_homeTeam = load('averages_five_match_homeTeam.joblib')
# averages_five_match_AwayTeam = load('averages_five_match_AwayTeam.joblib')
# df = load('pull_data.joblib')

# predictors = ["day_code","HomeTeam","AwayTeam","HTHG","HTAG","HS_rolling","AS_rolling","HST_rolling",
#               "AST_rolling","HF_rolling","AF_rolling","HC_rolling","AC_rolling",
#               "HY_rolling","AY_rolling","HR_rolling","AR_rolling"]


# def predict_match_result(Day_Of_Week,HomeTeam, AwayTeam):
#     df_matches_h = df.groupby("H_Team")
#     group_h = df_matches_h.get_group(HomeTeam)
#     cols_h = ["HTHG","HS","HST","HF","HC","HY","HR"]
#     new_cols_h = [f"{c}_rolling" for c in cols_h]

#     df_matches_a = df.groupby("A_Team")
#     group_a = df_matches_a.get_group(AwayTeam)
#     cols_a = ["HTAG","AS","AST","AF","AC","AY","AR"]
#     new_cols_a = [f"{c}_rolling" for c in cols_a]

#     data = averages_five_match_homeTeam(group_h,cols_h,new_cols_h)
#     data = data.rename(columns = {"HTHG_rolling" : "HTHG"})
#     data_a = averages_five_match_AwayTeam(group_a,cols_a,new_cols_a)
#     data_a = data_a.rename(columns = {"HTAG_rolling" : "HTAG"})

#     result = data.join(data_a, how="outer")
#     result.fillna(result.shift(), inplace=True)
#     if(len(result) >= 2):
#       result.drop(result.index[0], inplace=True)
#     result["day_code"] = Day_Of_Week
#     result = result.reindex(columns=predictors)

#     y_train_pred = model.predict(result)
#     winner= np.argmax(y_train_pred, axis=1)

#     return y_train_pred*100,winner

# API ROUTES
@app.route("/api/user",methods=['GET'])
def user():
    return jsonify(
        { 
            "user" : ["memebr1","memebr2","memebr3"] 
        }
    )

@app.route('/api/form',methods=['POST'])
def form():
    HomeTeam = request.json['HomeTeam']
    AwayTeam = request.json['AwayTeam']
    Day = int(request.json['Day'])

    # Prediction,winner = predict_match_result(Day,HomeTeam,AwayTeam)

    return jsonify({
        "H" : HomeTeam,
        "A" : AwayTeam,
        "D" : Day
    })
        # "Prediction" :  Prediction,
        # "Winner" :  winner,

if __name__ == "__main__":
    app.run(debug=True)