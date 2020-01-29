from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/form")
def test():
    return render_template("form.html");

@app.route("/auth")
def auth():
    print("\n\n\n")
    print("***DIAG: this Flask obj ***")
    print(app)
    print("***DIAG: request obj ***")
    print(request)
    print("*** DIAG: request.args['username'] ***")
    print(request.args['username']) #only works if username submitted
    #print(request.headers)
    #print(request.method)
    print(request.form)
    return request.args["in1"]

if __name__ == "__main__":
    app.debug = True
    app.run()
