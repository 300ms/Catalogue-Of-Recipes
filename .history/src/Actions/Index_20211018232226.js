import {
  getCategories, getByCategory, getByID, getAllMeals,
} from '../Requests/MealsApiRequests';

import {
  RECIPES, RECIPE_DETAILS, CATEGORIES,
} from './Types';

const categories = () => ({
  type: GET_CATEGORIES,
  categories: getCategories,
});

const allMeals = (categories) => ({
  type: GET_ALL_MEALS,
  allMeals: getAllMeals(categories),
});

const searchMeal = (mealID) => (dispatch) => {
  getByID(mealID)
    .then((response) => dispatch({
      type: RECIPE_DETAILS,
      payload: response.data.meals[0],
    }));
};

const categoryMeals = (category) => (dispatch) => {
  getByCategory(category)
    .then((response) => dispatch({
      type: RECIPES,
      payload: response.data.meals,
    }));
};

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});

export {
  categories, allMeals, searchMeal, categoryMeals, changeFilter,
};
