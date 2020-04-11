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
        print(row)
        arr = []
        arr.append(row[2])
        arr.append(row[4])
        arr.append(row[6])
        arr.append(row[8])
        arr.append(row[10])
        arr.append(row[12])
        arr.append(row[14])
        arr.append(row[16])
        arr.append(row[18])
        arr.append(row[20])

        output_dict[boroughs[borough_idx]] = arr
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
