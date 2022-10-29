import React, { useContext, useState } from 'react';
import { CategoriesContext } from '../context/CategoriesContext';
import { RecipesContext } from '../context/RecipesContext';

const Form = () => {
  const [search, setSearch] = useState({
    name: '',
    category: '',
  });

  const { categories } = useContext(CategoriesContext);
  const { setConsult, setExecute } = useContext(RecipesContext);

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConsult(search);
    setExecute(true);
  };

  return (
    <form className="col-12" onSubmit={handleSubmit}>
      <fieldset className="text-center">
        <legend>Search drinks by category or ingredient</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="name"
            className="form-control"
            type="text"
            placeholder="Search by ingredient"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="category"
            onChange={handleChange}>
            <option value="">-- Select category --</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Search drinks"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
