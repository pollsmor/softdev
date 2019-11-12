
from flask import Flask, render_template
import urllib.request
import json

app = Flask(__name__);

__key__ = "5Vrh42prZ7Y2kxrO0KAH6fQ0CqpN5tDujnmZk8sF";
__url__ = "https://api.nasa.gov/planetary/apod?api_key="

@app.route("/")
def home():
    url = urllib.request.urlopen(__url__ + __key__);
    response = url.read();
    data = json.loads(response);

    return render_template("index.html", pic=data['url'], explanation=data['explanation']);

if __name__ == "__main__":
    app.debug = True;
    app.run();
