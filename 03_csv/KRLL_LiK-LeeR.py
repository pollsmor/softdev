file = open("occupations.csv", "r")
lines = file.readlines()[1:]
lines = lines[:-1]
occupationsDict = {}
occupationsArray = []

for line in lines:
    parsed = line.rsplit(",", 1)
    jobClass = parsed[0]
    percentage = float(parsed[1])
    occupationsDict[jobClass] = percentage
    for i in range(int(percentage * 10)):
        occupationsArray.append(jobClass)

file.close()

print(occupationsArray)
