import { getCategories, getByCategory } from '../Requests/MealsApiRequests';

const response = await getCategories;

const getAllMeals = (categories) => {
  const allPromises = [];

  categories.forEach((category) => {
    getByCategory(category);
  });

  return allPromises;
};

const allMeals = await Promise.all(getAllMeals(response.categories));

export default allMeals;
