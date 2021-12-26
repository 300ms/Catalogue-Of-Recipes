/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function RecipeImage({
  className, src, name,
}) {
  return (
    <div className={className}>
      <img className="recipe-img" src={src} alt={name} />
      <h1 className="top-text">{name}</h1>
    </div>
  );
}

RecipeImage.defaultProps = {
  className: 'w-50',
};

RecipeImage.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default RecipeImage;
