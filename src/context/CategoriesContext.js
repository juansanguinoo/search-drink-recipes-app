import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const CategoriesContext = createContext();

const CategoriesProvider = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const urlCategories =
        'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const categories = await axios.get(urlCategories);

      setCategories(categories.data.drinks);
    };
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
