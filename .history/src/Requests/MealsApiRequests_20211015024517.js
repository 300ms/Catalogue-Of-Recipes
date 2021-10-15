const axios = require('axios');

const getCategories = () => axios.get('www.themealdb.com/api/json/v1/1/categories.php');
const getByCategory = (category) => axios.get(`www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
const getByName = (name) => axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=${name}`);

const getAllMeals = (categories) => {
  const allPromises = [];

  categories.forEach((category) => {
    allPromises.push(axios.get(`www.themealdb.com/api/json/v1/1/filter.php?c=${category}`));
  });

  return allPromises;
};

export { getCategories, getByCategory, getByName };
