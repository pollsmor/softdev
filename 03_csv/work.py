file = open("occupations.csv", "r")
lines = file.readlines()[1:]
occupations = {}

for line in lines:
    parsed = line.split(",")
    jobClass = parsed[0]
    percentage = parsed[1]
    occupations[jobClass] = percentage

file.close()
