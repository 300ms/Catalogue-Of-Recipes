import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';
import Recipes from './Recipes';
import {
  categories, searchRecipeByID, categoryRecipes,
} from '../Actions/Index';

function App({ state }) {
  const { recipes } = state;
  const dispatch = useDispatch();

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

      <CategoryFilter handleClick={(e) => dispatch(categoryRecipes(e))} />
      <Recipes recipes={recipes} clickOnRecipeDetail={(e) => clickOnRecipeDetail(e)} />
    </main>
  );
}

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => dispatch(categoryRecipes()),
  clickOnRecipeDetail: () => dispatch(searchRecipeByID()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  state: PropTypes.instanceOf(Object).isRequired,
};
