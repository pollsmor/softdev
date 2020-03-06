#Team Trees | Kevin Li, Justin Chen, Jacob Olin
#SoftDev pd2
#K11 -- Mongo + Flask
#2020-03-06

from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0')
