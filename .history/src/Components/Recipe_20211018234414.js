import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Recipe = (props) => {
  const { meal: recipe } = props;
  return (
    <div>
      <img src={recipe.strMealThumb} data-testid="image" className="meal-img" alt="" />
      <span>{recipe.idMeal}</span>
      <span>{recipe.strMeal}</span>
      <span>{recipe.strInstructions}</span>
      <span>{recipe.strCategory}</span>
      <button type="button" className="btn btn-secondary">
        <Link className="meal-link" to="./">
          <h4>Food Details</h4>
        </Link>
      </button>
    </div>
  );
};

Recipe.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default Recipe;
