import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [consult, setConsult] = useState({
    name: '',
    category: '',
  });
  const [execute, setExecute] = useState(false);

  const { name, category } = consult;

  useEffect(() => {
    if (execute) {
      const getRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
        const result = await axios.get(url);
        setRecipes(result.data.drinks);
      };
      getRecipes();
    }
  }, [consult, name, category, execute]);

  return (
    <RecipesContext.Provider value={{ recipes, setConsult, setExecute }}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
