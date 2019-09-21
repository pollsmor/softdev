#KALEZ - Emily Zhang and Kevin Li
#SoftDev1 pd1
#K10 -- Jinja Tuning
#2019-09-20

import random
from flask import Flask, render_template

app = Flask(__name__)

occupationsArray = []

@app.route("/occupyflaskst")
def occupyflaskst():
    return render_template("/hw.html")

if __name__ == "__main__":
    app.debug = True
    app.run()
