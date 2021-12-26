/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import RecipeImage from './RecipeImage';

const Category = ({
  src, name,
}) => (
  <RecipeImage className="category shadow" src={src} name={name} />
);

Category.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Category;
