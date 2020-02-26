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
    cursor = collection.find({"address.zipcode": zipcode})

    for document in cursor:
        print(document)

    client.close()

#get_by_borough("Bronx")
#get_by_zip("10462")
