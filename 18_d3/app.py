from flask import Flask, render_template
from utl import read_csv

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html", data = read_csv.read_csv());

if __name__ == "__main__":
    app.debug = True
    app.run()
