#Team Rocket | Kevin Li & Jason Zheng
#SoftDev pd2
#K10 -- Mongo Import/Export
#2020-02-29

#Pokédex (https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json)
#First, the JSON file is opened. Then, the built-in json library is used to parse the JSON.
#Next, insert_many inserts the data one JSON element at a time into the 'rocket' database
#in the 'pokedex' collection.

server_address = '127.0.0.1'

from pymongo import MongoClient
import json

def create_db():
    """Initializes the database. Only run this on an empty database."""
    client = MongoClient(server_address, 27017)
    db = client['rocket']
    collection = db['pokedex']

    file = open("pokedex.json", 'r')
    data = json.load(file)['pokemon'] #the outermost element is actually a curly bracket (aka. not a list)
    collection.insert_many(data)

    file.close()
    client.close()

def get_by_type(type):
    """Prints out the pokemon that are the same type as the specified type."""
    client = MongoClient(server_address, 27017)
    db = client['rocket']
    collection = db['pokedex']
    #just realized that "type" is a list (some 'mons have two types), yet Mongo narrows it down just fine
    cursor = collection.find({"type": type})

    for document in cursor:
        print(document)
        print('\n')

    client.close()

def get_taller(minheight): #in meters
    """Prints out the pokemon that are the same height or higher than the specified minheight."""
    client = MongoClient(server_address, 27017)
    db = client['rocket']
    collection = db['pokedex']
    cursor = collection.find({})

    for document in cursor:
        #The height is a string ending in m. This strips the last 2 characters (the leading space
        #and the 'm') then converts the remaining number string into a float.
        if ( float(document['height'][:-2]) >= minheight):
            print(document)
            print('\n')

    client.close()

def get_dual_typed():
    """Prints out the pokemon that have more than 1 type (i.e. Charizard is Fire/Flying)."""
    client = MongoClient(server_address, 27017)
    db = client['rocket']
    collection = db['pokedex']
    cursor = collection.find({})

    for document in cursor:
        if (len(document['type']) > 1): #check that the list of types is longer than 1
            print(document)
            print('\n')

    client.close()

def get_by_type_and_weight(type, minweight): #in kg
    """Prints out the pokemon of the specified type, and are heavier than the specified minweight."""
    client = MongoClient(server_address, 27017)
    db = client['rocket']
    collection = db['pokedex']
    cursor = collection.find({"type": type})

    for document in cursor:
        if ( float(document['weight'][:-3]) >= minweight): #similar premise to get_taller
            print(document)
            print('\n')

    client.close()

#Clever function
def get_challenged(pokemon):
    """Returns pokemon strong against your specified pokemon."""

    client = MongoClient(server_address, 27017)
    db = client['rocket']
    collection = db['pokedex']
    weaknesses = collection.find_one({"name": pokemon})['weaknesses'] #returns a list of weaknesses of specified 'mon
    cursor = collection.find({ "type": {"$in": weaknesses} }) #find pokemon with a type that is inside the weaknesses list

    for document in cursor:
        print(document)
        print('\n')

    client.close()

#create_db() #only run this when database is empty
#get_by_type("Flying")
#get_taller(3.0)
#get_dual_typed()
#get_by_type_and_weight("Ice", 130)
get_challenged("Ditto") #normal type's only weaknesses are fighting types
