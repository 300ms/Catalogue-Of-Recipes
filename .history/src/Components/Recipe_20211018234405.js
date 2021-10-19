import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Meal = (props) => {
  const { meal } = props;
  return (
    <div>
      <img src={meal.strMealThumb} data-testid="image" className="meal-img" alt="" />
      <span>{meal.idMeal}</span>
      <span>{meal.strMeal}</span>
      <span>{meal.strInstructions}</span>
      <span>{meal.strCategory}</span>
      <button type="button" className="btn btn-secondary">
        <Link className="meal-link" to="./">
          <h4>Food Details</h4>
        </Link>
      </button>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default Meal;
