import pandas as pd
import sys

if ( len(sys.argv) != 4 ) :
    print("Please provide all three arguments!")
else :
    data1 = pd.read_csv(sys.argv[1])
    data2 = pd.read_csv(sys.argv[2])
    data3 = pd.concat([data1,data2],axis=1, join="inner")
    for column in range(len(data3.columns)) :
        for col in data3.columns[column+1:] :
            if data3[data3.columns[column]].equals(data3[col]) :
                del data3[col]
    if not data3.empty :
        data3.to_csv(sys.argv[3])
    else :
        print("The file is Empty!")

