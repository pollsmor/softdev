from flask import Flask, render_template, request, session, url_for

app = Flask(__name__)

username = "sleepy";
password = "sleepier";

@app.route("/")
def home():
    return render_template("form.html");

#@app.route("/auth")
@app.route("/auth")
def auth():
    if (request.args["user"] == "sleepy"):
        if (request.args["password"] == "sleepier"):
            return render_template("success.html", username=username);

        else:
            return render_template("failed.html", reason="password");

    else:
        return render_template("failed.html", reason="username")

if __name__ == "__main__":
    app.debug = True
    app.run()
