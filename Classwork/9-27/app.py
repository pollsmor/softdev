from flask import Flask, render_template, request, session
from utl import ants
import os

app = Flask(__name__)
app.secret_key = os.urandom(32)

@app.route("/")
def home():
    return render_template("form.html");

#@app.route("/auth", methods=["POST"])
@app.route("/auth")
def auth():
    #print(app)
    #print(request)
    #print(request.args)
    #print(request.args["user"])
    #print(ants.lol())
    print(request.cookies.get("xd")) #print key test - works even with empty cookie unlike args

    #Testing session stuff
    session['xd'] = "what"
    print(session['xd'])
    session.pop('xd')
    #print(session['xd']) error
    
    username = request.args['user']
    method = request.method
    return render_template("auth.html", username=username, method=method);

if __name__ == "__main__":
    app.debug = True
    app.run()
