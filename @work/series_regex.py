import re

aString = "Black Lightning 3 - 16 episodes watched"

def searchText(lineText):
# get serie title, season number and episodes number and return them in a tuple
    seriesData = re.search("^(.+)\s(season|deel)\s([0-9]+)\s\-\s([0-9]+)\s.+$", aString)

    if seriesData is None:
        return("invalid data detected")
    else:
        return(seriesData.group(1,3,4))

print(searchText(aString))