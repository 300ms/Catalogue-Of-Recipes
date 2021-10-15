import { getCategories, getByCategory, getByName } from '../Requests/MealsApiRequests';

const { categories } = await getCategories;

const getAllMeals = (categories) => {
  const allPromises = [];

  categories.forEach((category) => {
    allPromises.push(axios.get(`www.themealdb.com/api/json/v1/1/filter.php?c=${category}`));
  });

  return allPromises;
};

const allMeals = await Promise.all(getAllMeals);

export default allMeals;
