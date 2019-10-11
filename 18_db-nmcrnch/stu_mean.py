#"Team" Harrison Ford - Kevin Li
#SoftDev1 pd1
#K18 -- Average
#2019-10-10

import sqlite3 #enable control of an sqlite database
#import pandas #for printing the db

db = sqlite3.connect('discobandit.db') #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

#For the table of IDs and associated averages
db2 = sqlite3.connect('averages.db')
c2 = db2.cursor()

#==========================================================
c2.execute(
    """ CREATE TABLE stu_avg(
        name TEXT NOT NULL,
        id INT PRIMARY KEY NOT NULL,
        average NUM NOT NULL
    ) """
)

id = 1
while (id <= 10):
    c.execute(
        """ SELECT name, students.id, mark
            FROM students, courses
            WHERE students.id = courses.id
            AND students.id = ?
        """, (id,)
    )

    total = 0
    rows = 0
    name = ""
    for row in c:
        name = row[0]
        total += row[2]
        rows += 1

    c2.execute("INSERT INTO stu_avg VALUES(?, ?, ?)", name, id, total / rows)

    id += 1

#Printing - requires pandas module
#print(pandas.read_sql_query("SELECT * from students", db))
#print(pandas.read_sql_query("SELECT * from courses", db))

#==========================================================

db.commit() #save changes
db.close()  #close database
db2.commit()
db2.close()
