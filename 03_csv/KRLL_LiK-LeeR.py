import random

file = open("occupations.csv", "r")
lines = file.readlines()[1:] #skip header line
lines = lines[:-1] #get rid of total line since that is not useful for this assignment

#Make empty dictionaries and array for random selection
occupationsDict = {}
occupationsArray = []

for line in lines:
    parsed = line.rsplit(",", 1) #allows me to split from the rightmost comma of a line - avoids issue of an occupation having a comma
    jobClass = parsed[0]
    percentage = float(parsed[1]) #must be stored as a number per instructions
    occupationsDict[jobClass] = percentage
    for i in range(int(percentage * 10)): #Arrays don't take floats as indices and I don't want to chop off the decimal - multiply by 10 to get rid of tenths place
        occupationsArray.append(jobClass)

file.close() #courtesy? idk I just remember being told to do this in intro2 no matter what

#Randomly chooses an occupation weighted based on percentage
def pickOccupation():
    index = random.randint(0, len(occupationsArray) - 1)
    return occupationsArray[index]

print(pickOccupation())
