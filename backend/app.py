from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

# Sample data for demonstration purposes
recipes = {
    "1": {"name": "Farm Fresh Salad", "ingredients": ["lettuce", "tomatoes", "cucumbers"]},
    "2": {"name": "Seasonal Fruit Smoothie", "ingredients": ["apple", "banana", "berries"]},
    # Add more recipes as needed
}

# Sample data for local sellers with additional information
local_sellers = [
    {
        "id": 1,
        "name": "Farm Fresh Market",
        "location": "123 Main St, Cityville",
        "about": "Providing fresh and organic produce from local farms. We believe in sustainable and eco-friendly farming practices.",
        "products": {
            "fruits": ["apples", "strawberries", "peaches"],
            "vegetables": ["zucchini", "tomatoes", "carrots"],
            "dairy": ["milk", "cheese"]
        },
        "seasonal_favorites": ["strawberries", "zucchini", "peaches"]
    },
    {
        "id": 2,
        "name": "Organic Harvest",
        "location": "456 Oak St, Townsville",
        "about": "Your source for certified organic fruits, vegetables, and more. We support local farmers committed to organic farming.",
        "products": {
            "organic_fruits": ["apples", "berries", "pears"],
            "organic_vegetables": ["kale", "spinach", "broccoli"],
            "herbs": ["basil", "rosemary", "thyme"]
        },
        "seasonal_favorites": ["apples", "kale", "berries"]
    },
    {
        "id": 3,
        "name": "Local Dairy Delights",
        "location": "789 Maple Ave, Villagetown",
        "about": "Bringing you the finest dairy products from local farms. Freshness guaranteed.",
        "products": {
            "milk": ["whole milk", "skim milk", "chocolate milk"],
            "cheese": ["cheddar", "mozzarella", "goat cheese"]
        },
        "seasonal_favorites": ["goat cheese", "chocolate milk"]
    },
    # Add more sellers as needed
]

# Sample user accounts for login
user_accounts = {
    "john_doe": {"username": "john_doe", "password": "password123", "email": "john@example.com"},
    # Add more user accounts as needed
}

# Spoonacular API details
spoonacular_api_url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients"
spoonacular_api_key = "890c62c74bmsh414e51d5f58e58fp162991jsn4fc0d39db092"

def generate_suggested_recipe(seasonal_ingredients):
    headers = {
        "X-RapidAPI-Key": spoonacular_api_key,
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    }

    params = {
        "ingredients": ",".join(seasonal_ingredients),
        "number": 1,  # Adjust as needed for the number of suggested recipes
        "ranking": 1
    }

    response = requests.get(spoonacular_api_url, headers=headers, params=params)

    if response.status_code == 200:
        data = response.json()
        if data:
            return data[0]  # Return the first suggested recipe
        else:
            return {"message": "No recipes found with the given ingredients."}
    else:
        return {"error": "Failed to fetch recipe from Spoonacular API."}

@app.route('/')
def hello():
    return jsonify(message="Hello from Flask!")

@app.route('/about')
def about():
    return jsonify(message="Welcome to our online farmers' market. Connect with local farmers and enjoy fresh, seasonal produce.")

@app.route('/recipe/<recipe_id>')
def get_recipe(recipe_id):
    if recipe_id in recipes:
        return jsonify(recipe=recipes[recipe_id])
    else:
        return jsonify(error="Recipe not found"), 404

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username in user_accounts and user_accounts[username]['password'] == password:
        return jsonify(message="Login successful")
    else:
        return jsonify(error="Invalid username or password"), 401

@app.route('/find_nearby')
def find_nearby():
    return jsonify(sellers=local_sellers)

@app.route('/suggest_recipe', methods=['POST'])
def suggest_recipe():
    data = request.get_json()
    seasonal_ingredients = data.get('seasonal_ingredients', [])

    if not seasonal_ingredients:
        return jsonify(error="Please provide seasonal ingredients."), 400

    suggested_recipe = generate_suggested_recipe(seasonal_ingredients)
    return jsonify(recipe=suggested_recipe)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
