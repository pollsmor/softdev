from flask import Flask, render_template, request
from utl import ants

app = Flask(__name__)

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
    username = request.args['user']
    method = request.method
    return render_template("auth.html", username=username, method=method);

if __name__ == "__main__":
    app.debug = True
    app.run()
