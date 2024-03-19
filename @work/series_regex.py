import re

aString = "eenie meenie season 1 - 10 episodes watched"

# get serie title, season number and episodes number and return them in a tuple
#
seriesData = re.search("^(.+)\sseason\s([0-9]+)\s\-\s([0-9]+)\s.+$", aString)

if seriesData is None:
    print(None)
else:
   print(seriesData.group(1,2,3))