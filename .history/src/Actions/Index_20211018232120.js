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
    .then((res) => res.json())
    .then((data) => dispatch({
      type: RECIPE_DETAILS,
      payload: data.meals[0],
    }));
};

const categoryMeals = (category) => (dispatch) => {
  getByCategory(category)
    .then((res) => res.json())
    .then((data) => dispatch({
      type: RECIPES,
      payload: data.meals,
    }));
};

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});

export {
  categories, allMeals, searchMeal, categoryMeals, changeFilter,
};
