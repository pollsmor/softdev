# Team Sleepy: Jesse Hall & Kevin li
# SoftDev1 pd1
# K15 -- Do I Know You?
# 2019-10-02

from flask import Flask, render_template, request, session, url_for

app = Flask(__name__)

username = 'sleepy';
password = 'sleepier';

@app.route("/")
def home():
    if (session['user']): #checks that a user is logged into a session, render welcome page
        return render_template("success.html", username=session['user'])
        
    return render_template("root.html"); #if not, then render login page

@app.route("/auth", methods=['POST'])
def auth():
    username = request.form.get('user')
    password = request.form.get('pw')

    if (username == 'sleepy' and password == 'sleepier'):
        return render_template("success.html", username=username);

    else:
        return render_template("failed.html", reason='username or password')

if __name__ == '__main__':
    app.debug = True
    app.run()
