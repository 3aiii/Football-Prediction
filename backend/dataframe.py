import pandas as pd
import numpy as np
from joblib import dump


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

dump(pull_data, 'pull_data.joblib')
