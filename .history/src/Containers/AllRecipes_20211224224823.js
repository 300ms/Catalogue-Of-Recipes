/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from '../Components/CategoryFilter';
import getAllRecipes from '../Actions/recipes';
import { getProductsPending } from '../Constants/Index';
import { updateCategory } from '../Actions/index';
import RecipesList from './RecipesList';

const AllRecipes = (props) => {
  const {
    addFilter, match, current, fetchAllMeals,
  } = props;

  const { category } = match.params;

  const handleFilterChange = (evt) => {
    const newCategory = evt.target.value;
    addFilter(evt.target.value);
    fetchAllMeals(newCategory);
  };

  return (
    <div>
      <div className="">

        <div className="mb-5">
          <CategoryFilter onChange={handleFilterChange} value={current} />
        </div>
      </div>
      <RecipesList category={category} />
    </div>
  );
};

AllRecipes.defaultProps = {
  category: 'Beef',
};

AllRecipes.propTypes = {
  category: PropTypes.string,
  addFilter: PropTypes.func.isRequired,
  fetchAllMeals: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired,
  match: PropTypes.shape().isRequired,
};

const mapStateToProps = (state) => {
  const { allMeals } = state;
  return (
    {
      pending: getProductsPending(allMeals),
      current: allMeals.category,
    }
  );
};

const mapDispatchToProps = {
  fetchAllMeals: getAllRecipes,
  addFilter: updateCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllRecipes);
