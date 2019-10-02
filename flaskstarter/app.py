from flask import Flask, render_template, request, session, url_for

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("form.html");

@app.route("/auth")
def auth():
    return render_template("auth.html", username=username);

if __name__ == "__main__":
    app.debug = True
    app.run()
