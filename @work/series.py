import re

def checkSeriesData(lineText) -> None:
    # get serie title, season number and episode number from text input
    seriesData = re.search("^(.+)\s(season||deel)\s([0-9]+)\s\-\s([0-9]+)\s.+$", lineText)

    if seriesData is None:
        if(len(lineText.strip())>0):
            invalidData = ("---invalid---",lineText.strip(),'')
            return(invalidData)
        pass
    else:
        return(seriesData.group(1,3,4))
    

if __name__ == '__main__':

    with open(r"./data-collection/series_data.txt", 'r') as fp:
        ln = 0
        lni = 0
        count = 0
        with open(r"./@work/serie_data_cleaned.txt", 'w') as fw:
            with open(r"./@work/serie_data_invalid.txt", 'w') as fi:
                for line in fp:
                    result = checkSeriesData(line)
                    if result != None and result[0] != ("---invalid---"):
                        count = count + 1
                        ln = ln + 1
                        fw.writelines(str(ln) + "|" + result[0] + "|" + result[1] + "|" + result[2] + '\n')
                    elif result != None and result[0] == ("---invalid---"):
                        count = count + 1
                        lni = lni + 1
                        fi.writelines(result[0] + " " + result[1] + " ---line: " + str(count) + '\n')
        
    print('\nTotal Lines OK #' + str(ln))
    print('\nTotal Lines INVALID #' + str(lni))
    print('\nTotal Lines processed #' + str(count))