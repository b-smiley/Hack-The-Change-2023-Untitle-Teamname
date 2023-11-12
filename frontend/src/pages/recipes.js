
import React, { useState } from 'react';

const Recipes = () => {
  const [recipe, setRecipe] = useState('');

  const generateRecipe = () => {
    // Replace this with your own recipe generation logic
    const ingredients = ['flour', 'sugar', 'eggs', 'milk'];
    const steps = ['Mix dry ingredients', 'Add wet ingredients', 'Bake in oven'];
    const newRecipe = `Ingredients: ${ingredients.join(', ')}\nSteps: ${steps.join(', ')}`;
    setRecipe(newRecipe);
  };

  return (
    <div>
      <h1>Recipe Generator</h1>
      <button onClick={generateRecipe}>Generate Recipe</button>
      {recipe && <pre>{recipe}</pre>}
    </div>
  );
};

export default Recipes;
