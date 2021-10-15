const axios = require('axios');

const getCategories = (categories) => {
  const allPromises = [];

  categories.forEach((category) => {
    allPromises.push(axios.get(`www.themealdb.com/api/json/v1/1/filter.php?c=${category}`));
  });
  
  const mealList = await Promise.all(allPromises);

  return allMeals;
}
const getByCategory = (category) => axios.get(`www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
const getByName = (name) => axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=${name}`);

export { getCategories, getByCategory, getByName };
