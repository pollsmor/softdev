#Kevin Li - Emily Zhang
#softDev pd1
#Classwork
#2019-09-19

from flask import Flask, render_template

app = Flask(__name__)

coll = [0, 1, 1, 2, 3, 5, 8]

lol = "Why isn't this working"

#We don't need a route for static stuff

@app.route("/")
def home():
    return "lol"

@app.route("/my_foist_template")
def my_foist_template():
    return render_template("my_foist_template/index.html", foo="Foist Template", list=coll)

if __name__ == "__main__":
    app.debug = True
    app.run()
