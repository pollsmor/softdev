file = open("occupations.csv", "r")
list = file.readlines()

for i in list:
    print(i)

file.close()
