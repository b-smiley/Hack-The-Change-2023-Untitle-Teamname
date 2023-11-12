import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageRenderer from '../components/ImageRenderer/ImageRenderer';
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  
  let imageURL = "https://spoonacular.com/recipeImages/427528-312x231.jpg";
  
  
  useEffect(() => {
    // Fetch data from your backend API using Axios
    axios.get('http://localhost:5000/suggest_recipes')
      .then(response => setRecipes(response.data.recipes))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts
  
  return (
    <div>
      <h1>Recipes</h1>
      <h1>Tester</h1>

      <img src={imageURL} alt="Recipe Image" />
      
      {recipes.map(recipe => (
        <div key={recipe.title} style={{ marginBottom: '20px' }}>
          <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '100%' }} />
          <h2>{recipe.title}</h2>
          <ul>
            {recipe.usedIngredients.map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
