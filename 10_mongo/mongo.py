#Team Rocket | Kevin Li & Jason Zheng
#SoftDev pd2
#K10 -- Mongo Import/Export
#2020-02-29

server_address = 'poggers-cc.ddns.net'

from pymongo import MongoClient
import json

"""
def get_by_borough(borough):
    client = MongoClient(server_address, 27017)
    db = client['test']
    collection = db['restaurants']
    cursor = collection.find({"borough": borough})

    for document in cursor:
        print(document)

    client.close()
"""

def create_db():
    client = MongoClient(server_address, 27017)
    db = client['rocket']
    collection = db['pokedex']

    file = open("pokedex.json", 'r')
    data = json.load(file)['pokemon']
    collection.insert_many(data)

    client.close()

create_db()
