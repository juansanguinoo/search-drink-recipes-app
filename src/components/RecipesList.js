import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import Recipes from './Recipes';

const RecipesList = () => {
  const { recipes } = useContext(RecipesContext);

  return (
    <div className="row mt-5">
      {recipes.map((recipe) => (
        <Recipes key={recipe.idDrink} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesList;
