import re

def searchText(lineText) -> None:
# get serie title, season number and episodes number and return them in a tuple
    movieData = re.search("^(.+)\s\(([0-9]+)\)$", lineText)

    if movieData is None:
        pass
    else:
        return(movieData.group(1,2))

if __name__ == '__main__':

    with open(r"./data-collection/movies_data.txt", 'r') as fp:
        ln = 0
        with open(r"./@work/movies_data_cleaned.txt", 'w') as fw:
            for line in fp:
                result = searchText(line)
                if result != None:
                    ln = ln + 1
                    newline = str(ln) + '|' + result[0] + '|' + result[1] + '\n'
                    fw.writelines(newline)

    print('\nTotal Lines ' + str(ln))