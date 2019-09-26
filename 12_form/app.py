from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("form.html");

@app.route("/auth")
def auth():
    print(app)
    print(request)
    print(request.args)
    return request.args["user"]

if __name__ == "__main__":
    app.debug = True
    app.run()
