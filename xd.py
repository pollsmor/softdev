import random

KREWES = {
    'orpheus': ['Kevin', 'Emily', 'Vishwaa'],
    'rex': ['William', 'Joseph', 'Calvin'],
    'endymion': ['Grace', 'Nahi', 'Derek']
}

def printName(team):
    print(KREWES[team][random.randint(0, len(KREWES[team]) - 1)])

#xddddddddddddd
printName('endymion')
