#Kevin Li - Emily Zhang
#softDev pd1
#Classwork
#2019-09-19

from flask import Flask, render_template

app = Flask(__name__)

list = [1, 2, 3, 4]

lol = "Why isn't this working"

@app.route("/")
def home():
    return render_template("my_foist_template/index.html", list=list)

if __name__ == "__main__":
    app.debug = True
    app.run()
