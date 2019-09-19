#Kevin Li - Emily Zheng
#softDev pd1
#Classwork
#2019-09-19

from flask import Flask

app = Flask(__name__)

list = [1, 2, 3, 4]

@app.route("/")
def home():
    #return render_template('index.html')
    return "what"

if __name__ == "__main__":
    app.debug = True
    app.run()

