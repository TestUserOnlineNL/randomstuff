import re

def searchText(lineText) -> None:
# get serie title, season number and episodes number and return them in a tuple
    seriesData = re.search("^(.+)\s(season||deel)\s([0-9]+)\s\-\s([0-9]+)\s.+$", lineText)

    if seriesData is None:
        pass
    else:
        return(seriesData.group(1,3,4))
    

if __name__ == '__main__':

    with open(r"./data-collection/series_data.txt", 'r') as fp:
        ln = 0
        with open(r"./@work/serie_data_cleaned.txt", 'w') as fw:
            for line in fp:
                result = searchText(line)
                if result != None:
                    ln = ln + 1
                    fw.writelines(str(ln) + "," + result[0] + "," + result[1] + "," + result[2] + '\n')

    print('\nTotal Lines ' + str(ln))