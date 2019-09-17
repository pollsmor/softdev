from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, world!"

@app.route("/KEK")
def KEK():
    return "OMEGALUL"

if __name__ == "__main__":
    app.run()
