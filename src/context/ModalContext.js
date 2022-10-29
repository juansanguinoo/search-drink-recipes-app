import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idRecipe, setIdRecipe] = useState(null);
  const [recipeInfo, setRecipeInfo] = useState({});

  useEffect(() => {
    const getRecipe = async () => {
      if (!idRecipe) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
      const result = await axios.get(url);

      setRecipeInfo(result.data.drinks[0]);
    };
    getRecipe();
  }, [idRecipe]);

  return (
    <ModalContext.Provider value={{ recipeInfo, setIdRecipe, setRecipeInfo }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
