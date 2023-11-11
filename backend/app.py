# app.py
import credentials

from flask import Flask, jsonify


app = Flask(__name__)

@app.route('/')
def hello():
    return jsonify(message="Hello from Sachin!")

@app.route('/about')
def about():
    return jsonify(message="This is the about page.")

@app.route('/search')
def search(keyword = 'farmers', location = '51.0447, -114,0719', search_radius = 20000):

    if (type(keyword) == str and type(location) == str and type(search_radius) == int):
        google_places_url = f'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
        search_parameters = {
            'location' : location,
            'radius' : search_radius,
            'keyword' : keyword,
            'key' : APIKEY
        }
        response = requests.get(google_places_url, params = search_parameters)
    else:
        error_message = {"error" : "invalid data type"}
        return jsonify(error_message), 1
    
    if (response.status_code == 200):
        data = response.json()
        results = data.get('results', [])
        return jsonify(message='successful search')
    else:
        return jsonify(error='Error fetching data from Google Places API'), 2
    
    return jsonify(message='ggg')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
