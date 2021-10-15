import { getCategories, getByCategory } from '../Requests/MealsApiRequests';

const response = await getCategories;

const getAllMeals = (response) => {
  const allPromises = [];

  response.categories.forEach((category) => {
    getByCategory(category);
  });

  return allPromises;
};

const allMeals = await Promise.all(getAllMeals);

export default allMeals;
