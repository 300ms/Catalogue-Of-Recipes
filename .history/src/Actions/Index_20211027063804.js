// import {
//   getCategories, getByCategory, getByID,
// } from '../Requests/MealsApiRequests';

import {
  RECIPES, RECIPE_DETAILS, CATEGORIES, CHANGE_FILTER,
} from './Types';

const categories = () => (dispatch) => {
  const abortCont = new AbortController();

  fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((res) => res.json())
    .then((data) => dispatch({
      type: CATEGORIES,
      payload: data.categories,
    }));

  return () => abortCont.abort();
};

const searchRecipeByID = (recipeID) => (dispatch) => {
  const abortCont = new AbortController();

  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`)
    .then((res) => res.json())
    .then((data) => dispatch({
      type: RECIPE_DETAILS,
      payload: data.meals[0],
    }));

  return () => abortCont.abort();
};

const categoryRecipes = (category) => (dispatch) => {
  const abortCont = new AbortController();

  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((res) => res.json())
    .then((data) => dispatch({
      type: RECIPES,
      payload: data.meals,
    }));

  return () => abortCont.abort();
};

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});

export {
  categories, searchRecipeByID, categoryRecipes, changeFilter,
};
