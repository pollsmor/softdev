#Kevin Li & Hillary Zen
#SoftDev pd2
#K09 -- Mongo Basics
#2020-02-25

from pymongo import MongoClient

def get_by_borough(borough):
    client = MongoClient('poggers-cc.ddns.net', 27017)
    db = client['test']
    collection = db['restaurants']
    cursor = collection.find({"borough": borough})

    for document in cursor:
        print(document)

    client.close()

def get_by_zip(zipcode):
    client = MongoClient('poggers-cc.ddns.net', 27017)
    db = client['test']
    collection = db['restaurants']
    cursor = collection.find({"address.zipcode": zipcode})

    for document in cursor:
        print(document)

    client.close()

def get_by_zip_and_grade(zipcode, grade):
    client = MongoClient('poggers-cc.ddns.net', 27017)
    db = client['test']
    collection = db['restaurants']

    #grades.0 gets the latest inspection grade, since I don't care that a restaurant is A in the past if it's C now.
    cursor = collection.find({"address.zipcode": zipcode, "grades.0.grade": grade})

    for document in cursor:
        print(document)

    client.close()

#Today I learned that the lower your score, the better your grade. Sounds so wrong.
def get_by_zip_and_threshold(zipcode, score):
    client = MongoClient('poggers-cc.ddns.net', 27017)
    db = client['test']
    collection = db['restaurants']

    #Similar reasoning to previous function.
    cursor = collection.find({"address.zipcode": zipcode, "grades.0.score": { "$lt": score } })

    for document in cursor:
        print(document)

    client.close()

"""
    Stuy's coordinates: 40.717952,-74.013813
    Chambers Street station coordinates: 40.715507, -74.009209 (about as far as I want)
    x-difference: 0.004604 (round to 0.0046)
    Southernmost coord: 40.713352 (40.717952 - 0.0046)
    Northernmost coord: 40.722552 (40.717952 + 0.0046)
    Easternmost coord: -74.004609 (-74.009209 + 0.0046)
    Westernmost coord: -74.013809 (-74.009209 - 0.0046)
    Unfortunately Stuy is already really near the Hudson so the western coordinate doesn't matter much, if at all.
"""

#Get restaurants close to Stuy. Close defined by the distance from Stuy's first flooor entrance to the Chambers Street station (1, 2, 3 lines)
def get_near_stuy():
    client = MongoClient('poggers-cc.ddns.net', 27017)
    db = client['test']
    collection = db['restaurants']

    #coord.0: abscissa / coord.1: ordinate
    #This basically returns a square around Stuy. A good portion of it will be over water.
    cursor = collection.find({ "address.coord.0": { "$gt": -74.013809, "$lt": -74.004609 },
                               "address.coord.1": { "$gt": 40.713352, "$lt": 40.722552 } })

    for document in cursor:
        print(document)

    client.close()

#get_by_borough("Bronx")
#get_by_zip("10462")
#get_by_zip_and_grade("10462", "B")
#get_by_zip_and_threshold("10462", 4)
get_near_stuy()
