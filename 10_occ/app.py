#KALEZ - Emily Zhang and Kevin Li
#SoftDev1 pd1
#K10 -- Jinja Tuning
#2019-09-20

import random
from flask import Flask, render_template

#CSV parsing stuff-----------------------------------------------------
file = open("data/occupations.csv", "r")
lines = file.readlines()[1:] #skip header line
lines = lines[:-1] #get rid of total line since that is not useful for this assignment

occupationsDict = {}
occupationsArray = []

for line in lines:
    parsed = line.rsplit(",", 2) #allows me to split from the rightmost comma of a line - avoids issue of an occupation having a comma
    jobClass = parsed[0]
    percentage = float(parsed[1]) #must be stored as a number per instructions
    link = parsed[2][:-1]
    occupationsDict[jobClass] = [percentage, link]
    for i in range(int(percentage * 10)): #Arrays don't take floats as indices and I don't want to chop off the decimal - multiply by 10 to get rid of tenths place
        occupationsArray.append(jobClass)

file.close() #courtesy? idk I just remember being told to do this in intro2 no matter what

#Randomly chooses an occupation weighted based on percentage
def pickOccupation():
    index = random.randint(0, len(occupationsArray) + 1)
    if (index == len(occupationsArray) or index == len(occupationsArray) + 1):
        return "Unemployed"

    return occupationsArray[index]

#---------------------------------------------------------------------

app = Flask(__name__)

@app.route("/")
def home():
    return "You're lost lul"

@app.route("/occupyflaskst")
def occupyflaskst():
    occupation = pickOccupation()
    print("Randomly picked: " + occupation) #testing if this gets passed
    return render_template("/hw.html", occupation=occupation, parent_dict=occupationsDict.items())

if __name__ == "__main__":
    app.debug = True
    app.run()
