#Kevin Li && Jackie Lin
#SoftDev1 pd1
#K17 -- SQLite3 Basics
#2019-10-07

import sqlite3 #enable control of an sqlite database
import csv #facilitate CSV I/O


DB_FILE = "discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

#==========================================================

# < < < INSERT YOUR POPULATE-THE-DB CODE HERE > > >
c.execute(
    """ CREATE TABLE IF NOT EXISTS students(
        name TEXT NOT NULL,
        age INT NOT NULL,
        id INT PRIMARY KEY
    ) """
)

with open('students.csv', newline='') as students:
    stuReader = csv.DictReader(students)

    for row in stuReader:
        print(row['id'])
        c.execute("INSERT INTO students VALUES(?, ?, ?)", (row['name'], row['age'], row['id']))

command = "SELECT * FROM students" # test SQL stmt in sqlite3 shell, save as string
c.execute(command)    # run SQL statement

#==========================================================

db.commit() #save changes
db.close()  #close database
