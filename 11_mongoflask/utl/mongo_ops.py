from pymongo import MongoClient
import json

client = MongoClient()

def create_db(): #run this every time Flask app is launched
    client.drop_database('rocket')

    db = client['rocket']
    collection = db['pokedex']

    file = open("docs/pokedex.json", 'r')
    data = json.load(file)['pokemon'] #the outermost element is actually a curly bracket (aka. not a list)
    collection.insert_many(data)

    file.close()
    client.close()
