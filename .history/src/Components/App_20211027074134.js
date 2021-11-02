import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';
import Recipes from './Recipes';
import {
  categories, searchRecipeByID, categoryRecipes,
} from '../Actions/Index';

function App({
  categories, searchRecipeByID, categoryRecipes, recipes,
}) {
  useEffect(() => {
    categoryRecipes('Beef');
    categories();
  }, []);

  const handleClick = (e) => {
    categoryRecipes(e);
  };

  const clickOnRecipeDetail = (e) => {
    searchRecipeByID(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const inputValue = e.target[0].value;

    // fetchByIngridient(inputValue);
    // fetchByArea(inputValue);
  };

  return (
    <main>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input placeholder="Search meal by main ingredient (e.g. Chicken Breast) and area (e.g. American, Canadian)" name="by-cat-and-area" />
        <button type="submit">
          <i className="fas fa-search" />
        </button>
      </form>

      <CategoryFilter handleClick={handleClick} />
      <Recipes recipes={recipes} clickOnRecipeDetail={clickOnRecipeDetail} />
    </main>
  );
}

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

export default connect(mapStateToProps, {
  categoryRecipes, categories, searchRecipeByID, /* fetchByIngridient, fetchByArea, */
})(App);

App.propTypes = {
  recipes: PropTypes.instanceOf(Array).isRequired,
  categoryRecipes: PropTypes.func.isRequired,
  categories: PropTypes.func.isRequired,
  searchRecipeByID: PropTypes.func.isRequired,
  // fetchByIngridient: PropTypes.func.isRequired,
  // fetchByArea: PropTypes.func.isRequired,
};
