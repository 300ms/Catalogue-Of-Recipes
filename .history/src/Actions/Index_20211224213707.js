import {
  getCategories, getByCategory, getByID,
} from '../Requests/MealsApiRequests';

import {
  RECIPES, RECIPE_DETAILS, CATEGORIES, CHANGE_FILTER,
} from './Types';

const categories = () => (dispatch) => getCategories()
  .then((response) => dispatch({
    type: CATEGORIES,
    payload: response.data.categories,
  }));

const searchRecipeByID = (recipeID) => (dispatch) => getByID(recipeID)
  .then((response) => dispatch({
    type: RECIPE_DETAILS,
    payload: response.data.meals,
  }));

// const categoryRecipes = (category) => (dispatch) => getByCategory(category)
//   .then((response) => dispatch({
//     type: RECIPES,
//     payload: response.data.meals,
//   }))
//   .catch((err) => console.error(err));

function categoryRecipes(category) {
  console.log(`Category: ${category}`)
  return function (dispatch) {
    getByCategory(category)
      .then((response) => dispatch({
        type: RECIPES,
        payload: response.data.meals,
      }))
      .catch((err) => console.error(err));
  };
}

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});

export {
  categories, searchRecipeByID, categoryRecipes, changeFilter,
};
