from flask import Flask,jsonify,request,json
from flask_cors import CORS
from keras.models import load_model
from joblib import load
import numpy as np
import pandas as pd
from pymongo import MongoClient
from bson.objectid import ObjectId
import re

app = Flask(__name__)

client = MongoClient('mongodb+srv://sirapatmai:30012546@nodeexpressproject.v5zjcgm.mongodb.net/')
# client = MongoClient('mongodb://localhost:27017/')
db = client['football']
collection = db['matchs']

cors = CORS(app, origins='*', supports_credentials=True)
model = load_model('football_predict_final.h5')

def pull_data():
    df = pd.read_csv('./Data/final_football_dataset.csv')
    df["Date"] = pd.to_datetime(df["Date"], format="%d/%m/%Y")
    df["H_Team"] = df["HomeTeam"]
    df["A_Team"] = df["AwayTeam"]
    df['HomeTeam'] = df['HomeTeam'].astype('category').cat.codes
    df['AwayTeam'] = df['AwayTeam'].astype('category').cat.codes
    df["day_code"] = df["Date"].dt.dayofweek
    df["target"] = (df["FTR"] == "H").astype("int")
    df.loc[df["FTR"] == "D","target"] = 2
    df = df.drop(columns=['Time'])

    return df

def averages_five_match_homeTeam(group,numOfLastMatch):
    group = group.sort_values("Date")
    if(numOfLastMatch > 0):
      group = group.tail(numOfLastMatch)
    else:
      group = group.tail(len(group))

    group = group[["HomeTeam","HTHG",
               'HS',
               'HST',
               'HF',
               'HC',
               'HY',
               'HR']]
    group_mean = group.mean()
    df_result = pd.DataFrame(group_mean).transpose()  # แปลง Series เป็น DataFrame และ transpose เพื่อให้ column เป็นแถว
    df_result = df_result.rename(columns={
        "HTHG": "HTHG_rolling",
        "HS": "HS_rolling",
        "HST": "HST_rolling",
        "HF": "HF_rolling",
        "HC": "HC_rolling",
        "HY": "HY_rolling",
        "HR": "HR_rolling"
    })

    return df_result

def averages_five_match_AwayTeam(group,numOfLastMatch):
    group = group.sort_values("Date")
    if(numOfLastMatch > 0):
      group = group.tail(numOfLastMatch)
    else:
      group = group.tail(len(group))

    group = group[["AwayTeam","HTAG",
              'AS',
              'AST',
              'AF',
              'AC',
              'AY',
              'AR']]
    group_mean = group.mean()
    df_result = pd.DataFrame(group_mean).transpose()  # แปลง Series เป็น DataFrame และ transpose เพื่อให้ column เป็นแถว
    df_result = df_result.rename(columns={
        "HTAG": "HTAG_rolling",
        "AS": "AS_rolling",
        "AST": "AST_rolling",
        "AF": "AF_rolling",
        "AC": "AC_rolling",
        "AY": "AY_rolling",
        "AR": "AR_rolling"
    })

    return df_result

def averages_match_with_direact_HomeTeam(HomeTeam,AwayTeam,numOfLastMatch):
    df = pull_data()
    group = df[(df['H_Team'] == HomeTeam) & (df['A_Team'] == AwayTeam)]

    group = group.sort_values("Date")
    if(numOfLastMatch > 0):
      group = group.tail(numOfLastMatch)
    else:
      group = group.tail(len(group))
    group = group[["HomeTeam","HTHG",
                  'HS',
                  'HST',
                  'HF',
                  'HC',
                  'HY',
                  'HR']]
    group_mean = group.mean()
    df_result = pd.DataFrame(group_mean).transpose()  # แปลง Series เป็น DataFrame และ transpose เพื่อให้ column เป็นแถว
    df_result = df_result.rename(columns={
        "HTHG": "HTHG_rolling",
        "HS": "HS_rolling",
        "HST": "HST_rolling",
        "HF": "HF_rolling",
        "HC": "HC_rolling",
        "HY": "HY_rolling",
        "HR": "HR_rolling"
    })

    return df_result

def averages_match_with_direact_AwayTeam(HomeTeam,AwayTeam,numOfLastMatch):
    df = pull_data()
    group = df[(df['H_Team'] == HomeTeam) & (df['A_Team'] == AwayTeam)]

    group = group.sort_values("Date")
    if(numOfLastMatch > 0):
      group = group.tail(numOfLastMatch)
    else:
      group = group.tail(len(group))
    group = group[["AwayTeam","HTAG",
                  'AS',
                  'AST',
                  'AF',
                  'AC',
                  'AY',
                  'AR']]
    group_mean = group.mean()
    df_result = pd.DataFrame(group_mean).transpose()  # แปลง Series เป็น DataFrame และ transpose เพื่อให้ column เป็นแถว
    df_result = df_result.rename(columns={
        "HTAG": "HTAG_rolling",
        "AS": "AS_rolling",
        "AST": "AST_rolling",
        "AF": "AF_rolling",
        "AC": "AC_rolling",
        "AY": "AY_rolling",
        "AR": "AR_rolling"
    })

    return df_result

predictors = ["HomeTeam","AwayTeam","HTHG","HTAG","HS_rolling","AS_rolling","HST_rolling",
              "AST_rolling","HF_rolling","AF_rolling","HC_rolling","AC_rolling",
              "HY_rolling","AY_rolling","HR_rolling","AR_rolling"]


def predict_match_result(HomeTeam, AwayTeam, numOfLastMatch,selectDataFromSameTeam ):
    df = pull_data()
    if(selectDataFromSameTeam == False):
        df_matches_h = df.groupby("H_Team")
        group_h = df_matches_h.get_group(HomeTeam)

        df_matches_a = df.groupby("A_Team")
        group_a = df_matches_a.get_group(AwayTeam)

        data = averages_five_match_homeTeam(group_h,numOfLastMatch)
        data = data.rename(columns = {"HTHG_rolling" : "HTHG"})
        data_a = averages_five_match_AwayTeam(group_a,numOfLastMatch)
        data_a = data_a.rename(columns = {"HTAG_rolling" : "HTAG"})

        result = data.join(data_a, how="outer")
        result.fillna(result.shift(), inplace=True)
        if(len(result) >= 2):
            result.drop(result.index[0], inplace=True)
            result = result.reindex(columns=predictors)

        y_train_pred = model.predict(result)
        return y_train_pred*100,result
    else:
        data = averages_match_with_direact_HomeTeam(HomeTeam,AwayTeam,numOfLastMatch)
        data = data.rename(columns = {"HTHG_rolling" : "HTHG"})
        data_a = averages_match_with_direact_AwayTeam(HomeTeam,AwayTeam,numOfLastMatch)
        data_a = data_a.rename(columns = {"HTAG_rolling" : "HTAG"})

        result = data.join(data_a, how="outer")
        result.fillna(result.shift(), inplace=True)
        if(len(result) >= 2):
            result.drop(result.index[0], inplace=True)
            result = result.reindex(columns=predictors)

        y_train_pred = model.predict(result)
        return y_train_pred*100,result

# API ROUTES
@app.route('/',methods = ['GET'])
def data_football():
    page = int(request.args.get('page',1))
    per_page = 2
    skip = (page - 1) * per_page
    data = list(collection.find({}).sort("RoundNumber", 1).skip(skip).limit(per_page))

    for item in data:
        item['_id'] = str(item['_id'])

        ## --- loop for update predictions field ---
        # for match in item['Matchs']:
        #     try:
        #         prediction = predict_match_result(0, match['HomeTeam'], match['AwayTeam']).tolist() if match['HomeTeam'] and match['AwayTeam'] else 0
        #         collection.update_one(
        #             {'_id': ObjectId(item['_id']), 'Matchs.HomeTeam': match['HomeTeam'], 'Matchs.AwayTeam': match['AwayTeam']},
        #             {'$set': {'Matchs.$.predictions': prediction}}
        #         )
        #     except KeyError:
        #         pass
    return jsonify(data)

@app.route('/api/getTeam',methods=['GET'])
def get_Team():
    collection = db["teams"]
    team_name = request.args.get('team')
    
    if team_name:
        team_name_pattern = re.compile(f".*{re.escape(team_name)}.*", re.IGNORECASE)
        teams = collection.find({"team_name": {"$regex": team_name_pattern}})
    else:
        teams = list(collection.find({}))

    teams = list(teams)
    for team in teams:
        team['_id'] = str(team['_id'])
    
    return jsonify(teams)

@app.route('/api/form',methods=['POST'])
def form():
    df = pd.read_csv('./Data/final_football_dataset.csv')
    df["Date"] = pd.to_datetime(df["Date"], format="%d/%m/%Y")
    df = df.drop(columns=['Time'])
    HomeTeam = request.json['HomeTeam']
    AwayTeam = request.json['AwayTeam']
    numOfLastMatch = int(request.json['numOfLastMatch'])
    selectDataFromSameTeam = request.json['selectDataFromSameTeam']

    if(selectDataFromSameTeam == True):
       df = df[(df['HomeTeam'] == HomeTeam) & (df['AwayTeam'] == AwayTeam)].tail(numOfLastMatch)
    else:
       df = df[(df['HomeTeam'] == HomeTeam) | (df['AwayTeam'] == AwayTeam)].tail(numOfLastMatch)
    df_json = df.to_dict(orient='records')

    Prediction = predict_match_result(HomeTeam,AwayTeam,numOfLastMatch,selectDataFromSameTeam)
    return jsonify({
        "Prediction": Prediction[0].tolist(),
        "Match" : df_json
    })

@app.route('/api/latest-date', methods=['GET'])
def get_latest_teams():
    team_name = request.args.get('team_name')
    df = pd.read_csv('./Data/final_football_dataset.csv')
    df["Date"] = pd.to_datetime(df["Date"], format="%d/%m/%Y")
    latest_games = df[(df['HomeTeam'] == team_name) | (df['AwayTeam'] == team_name)].tail(5)
    latest_games = latest_games[["HomeTeam","AwayTeam","Date","FTHG","FTAG"]]

    if latest_games.empty:
        return jsonify({'Details': ['Not Found']})

    teams = latest_games.to_dict(orient='records')
    return jsonify({'Details': teams})

# @app.route('/favorites', methods=['GET', 'POST'])
# def manage_favorites():
#     collection = db["matchs"]
#     if request.method == 'GET':
#         favorites = request.args.get('arrayData')
#         favorites = json.load(favorites)

#         # matches = collection.find({})
#         # favorite_matches = []

#         # for match in matches:
#         #     for single_match in match['matches']:
#         #         if single_match['MatchNumber'] in favorites:
#         #             favorite_matches.append(single_match)

#         return jsonify(favorites)
    
#     elif request.method == 'POST':
#         data = request.get_json()
#         favorites = request.args.get('favorites', '[]')
#         favorites = json.loads(favorites)
#         favorites.append(data)
#         favorites = json.dumps(favorites)
#         return jsonify({'message': 'Favorite added successfully'}), 201

if __name__ == "__main__":
    app.run(debug=True)