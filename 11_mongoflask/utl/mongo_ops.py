from pymongo import MongoClient
import json

client = MongoClient()
db = client['rocket']
collection = db['pokedex']

def create_db(): #run this every time Flask app is launched
    client.drop_database('rocket')

    file = open("docs/pokedex.json", 'r')
    data = json.load(file)['pokemon'] #the outermost element is actually a curly bracket (aka. not a list)
    collection.insert_many(data)

    file.close()
    client.close()

def get_by_type(type):
    """Prints out the pokemon that are the same type as the specified type."""

    #just realized that "type" is a list (some 'mons have two types), yet Mongo narrows it down just fine
    cursor = collection.find({"type": type})
    output = [] #list of dictionaries

    for document in cursor:
        output.append(document)

    return output

def get_taller(minheight): #in meters
    """Prints out the pokemon that are the same height or higher than the specified minheight."""

    cursor = collection.find({})
    output = [] #list of dictionaries

    for document in cursor:
        #The height is a string ending in m. This strips the last 2 characters (the leading space
        #and the 'm') then converts the remaining number string into a float.
        if ( float(document['height'][:-2]) >= minheight):
            output.append(document)

    return output

def get_dual_typed():
    """Prints out the pokemon that have more than 1 type (i.e. Charizard is Fire/Flying)."""

    cursor = collection.find({})
    output = [] #list of dictionaries

    for document in cursor:
        if (len(document['type']) > 1): #check that the list of types is longer than 1
            output.append(document)

    return output

def get_by_type_and_weight(type, minweight): #in kg
    """Prints out the pokemon of the specified type, and are heavier than the specified minweight."""

    cursor = collection.find({"type": type})
    output = [] #list of dictionaries

    for document in cursor:
        if ( float(document['weight'][:-3]) >= minweight): #similar premise to get_taller
            output.append(document)

    return output

#Clever function
def get_challenged(pokemon):
    """Returns pokemon strong against your specified pokemon."""

    your_mon = collection.find_one({"name": pokemon}) #returns the JSON of your pokemon
    weaknesses = None
    output = [] #list of dictionaries
    if (your_mon):
        weaknesses = your_mon['weaknesses']
    else:
        return output

    cursor = collection.find({ "type": {"$in": weaknesses} }) #find pokemon with a type that is inside the weaknesses list

    for document in cursor:
        output.append(document)

    return output
