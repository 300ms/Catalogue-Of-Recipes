/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Recipe from '../Components/Recipe';
import getAllRecipes from '../Actions/recipes';
import getRecipe from '../Actions/singleRecipe';
import { getProductsError, getProducts, getProductsPending } from '../Constants/Index';
import { updateCategory } from '../Actions/index';

const RecipesList = (props) => {
  const {
    products, pending, fetchAllMeals, category,
  } = props;

  useEffect(() => {
    fetchAllMeals(category);
  }, [category, fetchAllMeals]);

  return (
    <div>
      <div className="container">
        {products.map((el) => (
          <Link to={`/meal/${el.idMeal}`} key={Math.random() * 1000}>
            <Recipe
              src={el.strMealThumb}
              name={el.strMeal}
              id={el.idMeal}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

RecipesList.defaultProps = {
  products: [''],
};

RecipesList.propTypes = {
  pending: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
  fetchAllMeals: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(String),
};

const mapStateToProps = (state) => {
  const { allMeals } = state;
  return (
    {
      error: getProductsError(allMeals),
      products: getProducts(allMeals),
      pending: getProductsPending(allMeals),
      current: allMeals.category,
    }
  );
};

const mapDispatchToProps = {
  fetchAllMeals: getAllRecipes,
  addFilter: updateCategory,
  fetchMeal: getRecipe,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipesList);
