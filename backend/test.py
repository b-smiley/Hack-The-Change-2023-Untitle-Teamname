import requests
import credentials  # Ensure you have your API key in a credentials file or provide it directly

API_KEY = credentials.APIKEY


def reverse_geocode(latitude, longitude):
    reverse_geocode_url = 'https://maps.googleapis.com/maps/api/geocode/json'
    reverse_geocode_params = {
        'latlng': f'{latitude},{longitude}',
        'key': API_KEY
    }

    try:
        response = requests.get(reverse_geocode_url, params=reverse_geocode_params)
        response.raise_for_status()  # Check for HTTP errors

        data = response.json()
        results = data.get('results', [])
        if results:
            formatted_address = results[0].get('formatted_address')
            return formatted_address

    except requests.exceptions.RequestException as e:
        print(f"Error in reverse geocoding: {e}")

    return None


def search(keyword='Subway', location='51.0447, -114.0719', search_radius=20000):
    google_places_url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
    search_parameters = {
        'location': location,
        'radius': search_radius,
        'keyword': keyword,
        'key': API_KEY
    }

    try:
        response = requests.get(google_places_url, params=search_parameters)
        response.raise_for_status()  # Check for HTTP errors

        data = response.json()
        for place in data.get('results', []):
            place_id = place.get('place_id')
            name = place.get('name')
            location = place.get('geometry', {}).get('location', {})
            latitude = location.get('lat')
            longitude = location.get('lng')

            # Reverse geocode the coordinates to get the address
            address = reverse_geocode(latitude, longitude)

            # Process the data as needed (e.g., store in a database, display on a webpage, etc.)
            print(f"Place ID: {place_id}, Name: {name}, Address: {address}, Location: ({latitude}, {longitude})")

    except requests.exceptions.RequestException as e:
        print(f"Error making the request: {e}")


def main():
    search('farmer', '51.0447, -114.0719', 10000)


if __name__ == '__main__':
    main()
