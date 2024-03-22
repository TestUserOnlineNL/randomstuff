import re

aString = "a Witches' Ball (2017)"

def searchText(lineText):
# get serie title, season number and episodes number and return them in a tuple
    movieData = re.search("^(.+)\s\(([0-9]+)\)$", aString)

    if movieData is None:
        return("invalid data detected")
    else:
        return(movieData.group(1,2))

print(searchText(aString))