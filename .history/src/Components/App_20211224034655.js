import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';
import Recipes from './Recipes';
import {
  categories, searchRecipeByID, categoryRecipes,
} from '../Actions/Index';

function App({ state }) {
  const { recipes } = state;
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
    const inputValue = e.target[0].value;
    searchRecipeByID(inputValue);
  };

  return (
    <main>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input placeholder="Search meal by main ingredient (e.g. Chicken Breast) and area (e.g. American, Canadian)" name="by-cat-and-area" />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>

      <CategoryFilter handleClick={handleClick} />
      <Recipes recipes={recipes} clickOnRecipeDetail={clickOnRecipeDetail} />
    </main>
  );
}

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  categoryRecipes: () => dispatch(categoryRecipes()),
  categories: () => dispatch(categories()),
  searchRecipeByID: () => dispatch(searchRecipeByID()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  state: PropTypes.instanceOf(Object).isRequired,
};
