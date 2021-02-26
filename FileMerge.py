import pandas as pd
import sys
import glob

if ( len(sys.argv) != 3 ) :
    print("Please provide all three arguments!")
else :
    path = sys.argv[1]
    all_files = glob.glob(path + "/*.csv")
    li = []
    for filename in all_files :
        df = pd.read_csv(filename, index_col=None, header=0)
        li.append(df)
    data3 = pd.concat(li, axis=1, join="inner")
    for column in range(len(data3.columns)) :
        for col in data3.columns[column+1:] :
            if data3[data3.columns[column]].equals(data3[col]) :
                del data3[col]
    if not data3.empty :
        data3.to_csv(sys.argv[2])
    else :
        print("All columns were repeated !")