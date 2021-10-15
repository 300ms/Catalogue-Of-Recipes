import { getCategories, getByCategory, getByName } from '../Requests/MealsApiRequests';
import { GET_CATEGORIES, GET_ALL_MEALS, GET_BY_NAME } from '../Helpers/Helper';

const getAllMeals = (categories) => {
  const allPromises = [];

  categories.forEach((category) => {
    getByCategory(category);
  });

  return allPromises;
};

const categories = () => ({
  type: GET_CATEGORIES,
  categories: getCategories,
});

const getAllMeals = (categories) => {
  type: GET_ALL_MEALS,
  allMeals: await Promise.all(getAllMeals(categories)),
};
