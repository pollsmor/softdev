#"Team" Harrison Ford - Kevin Li
#SoftDev1 pd1
#K18 -- Average
#2019-10-10

import sqlite3 #enable control of an sqlite database
import csv #facilitate CSV I/O
#import pandas #for printing the db

#Must delete this every time this py file is run!
DB_FILE = "discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

#==========================================================
c.execute(
    """ CREATE TABLE stu_avg(
        id INT PRIMARY KEY NOT NULL
        average NUM NOT NULL
    ) """
)

print(c.execute("select * from students"))
#Printing - requires pandas module
#print(pandas.read_sql_query("SELECT * from students", db))
#print('\n')
#print(pandas.read_sql_query("SELECT * from courses", db))

#==========================================================

db.commit() #save changes
db.close()  #close database
