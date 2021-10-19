import {
  getCategories, getByCategory, getByID,
} from '../Requests/MealsApiRequests';

import {
  RECIPES, RECIPE_DETAILS, CATEGORIES,
} from './Types';

const categories = () => (dispatch) => {
  const abortCont = new AbortController();

  getCategories()
    .then((response) => dispatch({
      type: CATEGORIES,
      payload: response.data.categories,
    }));

  return () => abortCont.abort();
};

const searchMeal = (mealID) => (dispatch) => {
  getByID(mealID)
    .then((response) => dispatch({
      type: RECIPE_DETAILS,
      payload: response.data.meals,
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
  categories, searchMeal, categoryMeals, changeFilter,
};
