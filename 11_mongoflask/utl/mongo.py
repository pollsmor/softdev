from pymongo import MongoClient
import json

def create_db():
    """Initializes the database. Only run this on an empty database."""
    client = MongoClient()
    db = client['rocket']
    collection = db['pokedex']

    file = open("pokedex.json", 'r')
    data = json.load(file)['pokemon'] #the outermost element is actually a curly bracket (aka. not a list)
    collection.insert_many(data)

    file.close()
    client.close()
