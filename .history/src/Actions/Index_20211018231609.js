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
  const abortCont = new AbortController();

  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((res) => res.json())
    .then((data) => dispatch({
      type: FETCH_MEALS,
      payload: data.meals,
    }));

  return () => abortCont.abort();
};

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});

export {
  categories, allMeals, searchMeal, categoryMeals, changeFilter,
};
