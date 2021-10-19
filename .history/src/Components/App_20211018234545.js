import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  categories, searchRecipeByID, categoryRecipes,
} from '../Actions/Index';
// import Categories from '../presentation/Categories';
import Recipe from './Recipe';

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

  const clickOnDetailMeal = (e) => {
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

      <Categories handleClick={handleClick} />
      <Recipe meals={recipes} clickOnDetailMeal={clickOnDetailMeal} />
    </main>
  );
}

const mapStateToProps = (state) => ({
  meals: state.meals.meals,
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
