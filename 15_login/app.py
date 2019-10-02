# Team Sleepy: Jesse Hall & Kevin li
# SoftDev1 pd1
# K15 -- Do I Know You?
# 2019-10-02

from flask import Flask, render_template, request, session, url_for, redirect
import os

app = Flask(__name__)

app.secret_key = os.urandom(32)

#Hardcoded combination
username = 'sleepy';
password = 'sleepier';

@app.route("/")
def home():
    if (session.get('user')): #checks that a user is logged into a session, render welcome page
        print("Session username: " + session['user'])
        return render_template("welcome.html", username=session['user'])

    return render_template("login.html"); #if not, then render login page

@app.route("/auth", methods=['GET', 'POST'])
def auth():
    username = request.form.get('user')
    password = request.form.get('pw')

    if (username == 'sleepy' and password == 'sleepier'):
        session['user'] = username
        return render_template("welcome.html", username=username);

    else:
        return render_template("failed.html")

@app.route("/logout")
def logout():
    session.pop('user')
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.debug = True
    app.run()
