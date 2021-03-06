#Team Full RESTore | Kevin Li & Eric Lau
#SoftDev1 pd1
#K25 -- GET more REST
#2019-11-14

from flask import Flask, render_template
import urllib.request
import json

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/countries")
def countries():
    url = urllib.request.urlopen("https://restcountries.eu/rest/v2/name/united%20states%20of%20america")
    response = url.read()
    data = json.loads(response)

    return render_template("countries.html", flag=data[0]['flag'], name=data[0]['name'], demonym=data[0]['demonym'])

@app.route("/rick")
def rick():
    url = urllib.request.urlopen("https://rickandmortyapi.com/api/character/1")
    response = url.read()
    data = json.loads(response)

    return render_template("rick.html", avatar=data['image'], name=data['name'], species=data['species'], gender=data['gender'])

@app.route("/met")
def met():
    url = urllib.request.urlopen("https://collectionapi.metmuseum.org/public/collection/v1/objects/208218")
    response = url.read()
    data = json.loads(response)

    return render_template("met.html", image=data['primaryImage'], name=data['title'], department=data['department'])

if __name__ == "__main__":
    app.debug = True
    app.run()
