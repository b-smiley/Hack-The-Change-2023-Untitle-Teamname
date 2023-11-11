# app.py

#AIzaSyBHOjpmNJXrZHTRijtphPn6KfX3_lQACLI - google places API key

from flask import Flask, jsonify


app = Flask(__name__)

@app.route('/')
def hello():
    return jsonify(message="Hello from Sachin!")

@app.route('/about')
def about():
    return jsonify(message="This is the about page.")    

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
