import {
  getCategories, getByCategory, getByName, getAllMeals,
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

const searchMeal = (name) => ({
  type: GET_BY_NAME,
  name: getByName(name),
});

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
