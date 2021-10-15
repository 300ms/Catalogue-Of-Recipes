import { getCategories, getByCategory } from '../Requests/MealsApiRequests';

const { categories } = await getCategories;

const getAllMeals = (categories) => {
  const allPromises = [];

  categories.forEach((category) => {
    getByCategory(category);
  });

  return allPromises;
};

const allMeals = await Promise.all(getAllMeals);

export default allMeals;
