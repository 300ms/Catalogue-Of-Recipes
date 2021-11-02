const axios = require('axios');

const getCategories = () => axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
const getByCategory = (category) => axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
const getByID = (ID) => axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`);
const getRandomMeal = () => axios.get('https://www.themealdb.com/api/json/v1/1/random.php');

const getAllMeals = (categories) => {
  const allPromises = [];

  categories.forEach((category) => {
    getByCategory(category);
  });

  return allPromises;
};

export {
  getCategories, getByCategory, getByID, getAllMeals, getRandomMeal,
};
