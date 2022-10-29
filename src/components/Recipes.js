import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Recipes = ({ recipe }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { recipeInfo, setIdRecipe, setRecipeInfo } = useContext(ModalContext);

  const showIngredients = (recipeInfo) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (recipeInfo[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {recipeInfo[`strIngredient${i}`]} {recipeInfo[`strMeasure${i}`]}
          </li>
        );
      }
    }

    return ingredients;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{recipe.strDrink}</h2>
        {recipe.strDrinkThumb && (
          <img
            className="card-img-top"
            src={recipe.strDrinkThumb}
            alt={recipe.strDrink}
          />
        )}
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              setIdRecipe(recipe.idDrink);
              handleOpen();
            }}>
            See recipe
          </button>

          <Modal
            open={open}
            onClose={() => {
              setIdRecipe(null);
              setRecipeInfo({});
              handleClose();
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <h2>{recipeInfo.strDrink}</h2>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <h3>Instructions</h3>
                <p>{recipeInfo.strInstructions}</p>
                <img
                  className="img-fluid my-4"
                  src={recipeInfo.strDrinkThumb}
                  alt={recipeInfo.strDrink}
                />

                <h3>Ingredients and quantities</h3>
                <ul>{showIngredients(recipeInfo)}</ul>
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
