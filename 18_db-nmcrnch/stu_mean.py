#"Team" Harrison Ford - Kevin Li
#SoftDev1 pd1
#K18 -- Average
#2019-10-10

import sqlite3 #enable control of an sqlite database

db = sqlite3.connect('discobandit.db')
c = db.cursor()

#For the stu_avg table
db2 = sqlite3.connect('averages.db')
c2 = db2.cursor()

#==========================================================
#Yeah name is not required but I think it makes things easier when printing out each student's name, id, and average
c2.execute(
    """ CREATE TABLE stu_avg(
        name TEXT NOT NULL,
        id INT PRIMARY KEY NOT NULL,
        average NUM NOT NULL
    ) """
)

#Loop through every ID
id = 1
while (id <= 10):
    c.execute(
        """ SELECT name, students.id, mark
            FROM students, courses
            WHERE students.id = courses.id
            AND students.id = ?
        """, (id,) #lets me compare the id variable in my py script to the id in the db
    )

    total = 0 #those two allow for the calculation of averages
    rows = 0
    name = ""
    for row in c:
        name = row[0] #I'm not aware of a more elegant way to only extract the name once, sooooo...
        total += row[2] #mark
        rows += 1

    c2.execute("INSERT INTO stu_avg VALUES(?, ?, ?)", (name, id, total / rows))

    id += 1


c2.execute("SELECT * FROM stu_avg")
for row in c2:
    print(row)

#==========================================================

db.commit() #save changes
db.close()  #close database
db2.commit()
db2.close()
