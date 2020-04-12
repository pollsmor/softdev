import csv

CSV_FILE = "static/nyc_pop_1950-2040.csv"

def read_csv():
    output_dict = {}
    boroughs = ['nyc', 'bronx', 'brooklyn', 'manhattan', 'queens', 'staten']
    borough_idx = 0

    f = open(CSV_FILE)
    data = csv.reader(f)
    next(data) #header row is irrelevant
    for row in data:
        dict = {}
        dict['1950'] = row[2]
        dict['1960'] = row[4]
        dict['1970'] = row[6]
        dict['1980'] = row[8]
        dict['1990'] = row[10]
        dict['2000'] = row[12]
        dict['2010'] = row[14]
        dict['2020'] = row[16]
        dict['2030'] = row[18]
        dict['2040'] = row[20]


        output_dict[boroughs[borough_idx]] = dict
        borough_idx += 1

    f.close()

    return output_dict

"""
dict = read_csv()
for key, value in dict.items():
    print(key)
    print('\n')
    print(value)
    print('\n')
"""
