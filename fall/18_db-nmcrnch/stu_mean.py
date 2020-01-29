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
        average1 NUM,
        average2 NUM
    ) """
)

id = 1
while id <= 10:
    #Loop through every ID (first sem)
    c.execute(
        """ SELECT name, mark
            FROM students, courses
            WHERE students.id = courses.id
            AND students.id = ?
            AND sem = 1
        """, (id,)
    )

    name = ""
    sem1Total = 0
    sem1Courses = 0
    for row in c:
        name = row[0] #don't know a more elegant way to get the name only once
        sem1Total += row[1]
        sem1Courses += 1

    #Loop through every ID (second sem)
    c.execute(
        """ SELECT name, mark
            FROM students, courses
            WHERE students.id = courses.id
            AND students.id = ?
            AND sem = 2
        """, (id,)
    )

    sem2Total = 0
    sem2Courses = 0
    for row in c:
        sem2Total += row[1]
        sem2Courses += 1

    c2.execute("INSERT INTO stu_avg VALUES(?, ?, ?, ?)", (name, id, sem1Total / sem1Courses, sem2Total / sem2Courses))

    id += 1

print("Name, ID, Semester 1 average, Semester 2 average")
c2.execute("SELECT * FROM stu_avg")
for row in c2:
    print(row)

#==========================================================

db.commit() #save changes
db.close()  #close database
db2.commit()
db2.close()
