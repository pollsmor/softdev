#Team Trees | Kevin Li, Justin Chen, Jacob Olin
#SoftDev pd2
#K11 -- Mongo + Flask
#2020-03-06

from flask import Flask, render_template, request
from utl import mongo_ops

app = Flask(__name__)
mongo_ops.create_db()

@app.route("/")
def home():
    return render_template("index.html", title = "Mongo Frontend")

@app.route("/results")
def results():
    type = request.args.get('type')
    minheight = request.args.get('minheight') #can't use float() here in case minheight
    minweight = request.args.get('minweight') #and minweight are not the query
    dualtype = request.args.get('dualtype')
    pokemon = request.args.get('pokemon')
    query = None

    if type and minweight:
        title = "Type picker + minimum weight"
        query = mongo_ops.get_by_type_and_weight(type, float(minweight))
    else:
        title = "Type picker"
        query = mongo_ops.get_by_type(type)

    if minheight:
        title = "Minimum height"
        query = mongo_ops.get_taller(float(minheight))

    if dualtype == 'true':
        title = "Dual-typed Pokemon"
        query = mongo_ops.get_dual_typed()

    if pokemon:
        title = ("Pokemon strong against: " + pokemon)
        query = mongo_ops.get_challenged(pokemon)

    dictList = []
    for element in query:
        dict = {}
        dict['number'] = element['num']
        dict['name'] = element['name']
        dict['types'] = element['type']
        dict['height'] = element['height']
        dict['weight'] = element['weight']
        dict['weaknesses'] = element['weaknesses']
        dictList.append(dict)

    return render_template("results.html", title = title, dictList = dictList)

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0')
    #app.run()
