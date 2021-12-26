/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import RecipeImage from './RecipeImage';

function Category({
  src, name,
}) {
  return <RecipeImage className="category shadow" src={src} name={name} />;
}

Category.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Category;
