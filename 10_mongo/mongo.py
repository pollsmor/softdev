#Team {undefined} | Kevin Li & Jason Zheng
#SoftDev pd2
#K10 -- Mongo Import/Export
#2020-02-29

server_address = '127.0.0.1'

from pymongo import MongoClient

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
