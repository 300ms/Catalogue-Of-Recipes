const axios = require('axios');

const getCategories = (categories) => axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDvV6GnF1QIwDhhGYJPZL6hdtgQvj3MmY0&address=${address}&fields=geometry,formatted_address,types`);
const getByCategory = (category) => axios.get(`www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
const getByName = (name) => axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=${name}`);

export { getCategories, getByCategory, getByName };
