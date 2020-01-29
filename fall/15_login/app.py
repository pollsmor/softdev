# Team Sleepy: Jesse Hall & Kevin Li
# SoftDev1 pd1
# K15 -- Do I Know You?
# 2019-10-02

from flask import Flask, render_template, request, session, url_for, redirect
import os

app = Flask(__name__)

app.secret_key = os.urandom(32) #need this to store session stuff

#Hardcoded combination
username = 'sleepy';
password = 'sleepier';

@app.route("/")
def home():
    if (session.get('user')): #checks that a user is logged into a session, render welcome page
        print("Session username: " + session['user'])
        return render_template("welcome.html", username=session['user'])

    return render_template("login.html"); #if not, then render login page

@app.route("/auth", methods=['GET', 'POST']) #Don't think it matters to specify the methods but just for fun
def auth():
    if (session.get('user')): #same thing as in home route but necessary so that refreshing /auth doesn't serve you a fail message
        print("Session username: " + session['user'])
        return render_template("welcome.html", username=session['user'])

    username = request.form.get('user')
    password = request.form.get('pw')

    if (username == 'sleepy' and password == 'sleepier'):
        session['user'] = username #establish a session with the username as per instructions
        return render_template("welcome.html", username=username);

    else:
        #Was contemplating distinguishing between a wrong user or pw but that would reveal too much info
        return render_template("failed.html")

#The logout button in welcome.html redirects here
@app.route("/logout")
def logout():
    session.pop('user') #logs the user out of the session
    return redirect(url_for('home')) #let the logic in the home route handle the rest, no "you have been logged out" message

if __name__ == '__main__':
    app.debug = True
    app.run()
