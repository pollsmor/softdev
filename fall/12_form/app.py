from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("form.html");

@app.route("/auth")
def auth():
    #print(app)
    #print(request)
    #print(request.args)
    #print(request.args["user"])
    username = request.args['user']
    method = request.method
    return render_template("auth.html", username=username, method=method);

if __name__ == "__main__":
    app.debug = True
    app.run()
