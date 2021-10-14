import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Meal = (props) => {
  const { meal } = props;
  return (
    <div>
      <img src={meal.thumb} data-testid="image" className="meal-img" alt="" />
      <span>{meal.id}</span>
      <span>{meal.name}</span>
      <span>{meal.description}</span>
      <span>{meal.category}</span>
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default Meal;
