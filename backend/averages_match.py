from joblib import dump

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

dump(averages_five_match_homeTeam, 'averages_five_match_homeTeam.joblib')
dump(averages_five_match_AwayTeam, 'averages_five_match_AwayTeam.joblib')