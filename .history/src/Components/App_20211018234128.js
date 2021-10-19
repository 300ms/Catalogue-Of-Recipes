import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  categories, searchMeal, categoryRecipes,
} from '../Actions/Index';
import Categories from '../presentation/Categories';
import Meals from '../presentation/Meals';

function App({
  categories, searchMeal, categoryRecipes,
}) {
  useEffect(() => {
    categoryRecipes('Beef');
    categories();
  }, []);

  const handleClick = (e) => {
    categoryRecipes(e);
  };

  const clickOnDetailMeal = (e) => {
    searchMeal(e);
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
      <Meals meals={meals} clickOnDetailMeal={clickOnDetailMeal} />
    </main>
  );
}

const mapStateToProps = (state) => ({
  meals: state.meals.meals,
});

export default connect(mapStateToProps, {
  fetchMeals, fetchCategories: categories, fetchDetailMeal, fetchByIngridient, fetchByArea,
})(App);

App.propTypes = {
  meals: PropTypes.instanceOf(Array).isRequired,
  categoryMeals: PropTypes.func.isRequired,
  categories: PropTypes.func.isRequired,
  fetchDetailMeal: PropTypes.func.isRequired,
  fetchByIngridient: PropTypes.func.isRequired,
  fetchByArea: PropTypes.func.isRequired,
};
