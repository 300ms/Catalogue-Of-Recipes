import {
  getCategories, getByCategory, getByName, getAllMeals,
} from '../Requests/MealsApiRequests';

import {
  GET_CATEGORIES, GET_ALL_MEALS, GET_BY_NAME, GET_BY_CATEGORY, CHANGE_FILTER,
} from '../Helpers/Helper';

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

const categoryMeals = (category) => ({
  type: GET_BY_CATEGORY,
  categoryMeals: getByCategory(category),
});

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});

export { categories, allMeals, searchMeal, categoryMeals, changeFilter };
