from flask import Flask, render_template, request, session
from utl import ants
import os

app = Flask(__name__)
app.secret_key = os.urandom(32)

@app.route("/")
def home():
    return render_template("form.html");

#@app.route("/auth")
@app.route("/auth")
def auth():
    return render_template("auth.html", username=username, method=method);

if __name__ == "__main__":
    app.debug = True
    app.run()
