import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  
  const imageURL = '';
  
  
  useEffect(() => {
    // Fetch data from your backend API using Axios
    axios.get('http://localhost:5000/suggest_recipes')
      .then(response => setRecipes(response.data.recipes))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts
  
  return (
    <div>
      <h1>Locally Sourced Recipes</h1>
      
      
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
