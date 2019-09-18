#Kevin Li
#SoftDev1 pd1
#K08 -- Basic Flask app
#2019-09-18

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    print("What")
    return render_template('home.html')

@app.route("/test")
def test():
    return "Test, test"

@app.route("/about")
def about():
    return "I'm bad at CS:GO"

if __name__ == "__main__":
    app.debug = True
    app.run()
