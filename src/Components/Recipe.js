/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import RecipeImage from './RecipeImage';

function Recipe({
  src, name,
}) {
  return <RecipeImage className="category" src={src} name={name} alt={name} />;
}

Recipe.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Recipe;
