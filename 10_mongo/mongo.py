#Team Rocket | Kevin Li & Jason Zheng
#SoftDev pd2
#K10 -- Mongo Import/Export
#2020-02-29

server_address = 'poggers-cc.ddns.net'

from pymongo import MongoClient
import json

def create_db():
    client = MongoClient(server_address, 27017)
    db = client['rocket']
    collection = db['pokedex']

    file = open("pokedex.json", 'r')
    data = json.load(file)['pokemon']
    collection.insert_many(data)
    file.close()

    client.close()

def get_by_type(type):
    client = MongoClient(server_address, 27017)
    db = client['rocket']
    collection = db['pokedex']
    #just realized that "type" is a list (some 'mons have two types), yet Mongo narrows it down just fine
    cursor = collection.find({"type": type})

    for document in cursor:
        print(document)
        print('\n')

    client.close()

def get_taller(minheight): #gets 'mons taller than your specified height (in meters)
    client = MongoClient(server_address, 27017)
    db = client['rocket']
    collection = db['pokedex']
    cursor = collection.find({})

    for document in cursor:
        if ( float(document['height'][:-2]) >= minheight):
            print(document)
            print('\n')

    client.close()

def get_dual_typed(): #some 'mons have more than 1 type (i.e. Charizard is Fire/Flying)
    client = MongoClient(server_address, 27017)
    db = client['rocket']
    collection = db['pokedex']
    cursor = collection.find({})

    for document in cursor:
        if (len(document['type']) > 1):
            print(document)
            print('\n')

    client.close()

def get_by_type_and_weight(type, minweight): #same type that also has to be heavier than your specified weight (in kg)
    client = MongoClient(server_address, 27017)
    db = client['rocket']
    collection = db['pokedex']
    cursor = collection.find({"type": type})

    for document in cursor:
        if ( float(document['weight'][:-3]) >= minweight):
            print(document)
            print('\n')

    client.close()

#create_db() #only run this when database is empty
#get_by_type("Flying")
#get_taller(3.0)
#get_dual_typed()
#get_by_type_and_weight("Ice", 130)
