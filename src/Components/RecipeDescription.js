/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function RecipeDetails({
  category, area, ingredients, className,
}) {
  return (
    <div className={className}>
      <p>
        <span className="prop-title">
          Category&nbsp;:&nbsp;
        </span>
        <span>
          {category}
        </span>
      </p>
      <hr />
      <p>
        <span className="prop-title">
          Area&nbsp;:&nbsp;
        </span>
        <span>
          {area}
        </span>
      </p>
      <hr />
      <p className="prop-title">
        Ingredients&nbsp;;&nbsp;
      </p>

      {
      ingredients.map((ingredient, index) => {
        if (index < ingredients.length - 1) {
          return (
            <span key={uuidv4()}>
              {ingredient}
              ,
              {' '}
            </span>
          );
        }
        return (
          <span key={uuidv4()}>
            {ingredient}
          </span>
        );
      })
    }
      <hr />
    </div>
  );
}

RecipeDetails.defaultProps = {
  className: 'w-50',
};

RecipeDetails.propTypes = {
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(String).isRequired,
  className: PropTypes.string,
};

export default RecipeDetails;
