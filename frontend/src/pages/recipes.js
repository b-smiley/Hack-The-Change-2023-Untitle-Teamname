import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading/Loading";
import "./RecipeCard.css"; // Import the CSS file

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from your backend API using Axios
    axios
      .get("http://localhost:5000/suggest_recipes")
      .then((response) => {
        setRecipes(response.data.recipes);
        // Set loading to false once the data has been fetched
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Set loading to false once the data has been fetched
        setIsLoading(false);
      });
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      <h1>Locally Sourced Recipes</h1>
      {isLoading ? (
        <Loading />
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.title} className="recipeCard">
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            <ul>
              {recipe.usedIngredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Recipes;
