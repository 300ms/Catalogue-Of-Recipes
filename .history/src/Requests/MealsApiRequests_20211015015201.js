const axios = require('axios');

const getCategories = (address) => axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDvV6GnF1QIwDhhGYJPZL6hdtgQvj3MmY0&address=${address}&fields=geometry,formatted_address,types`);
const getByCategory = (address) => axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDvV6GnF1QIwDhhGYJPZL6hdtgQvj3MmY0&address=${address}&fields=geometry,formatted_address,types`);
const getRandomMeal = (address) => axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDvV6GnF1QIwDhhGYJPZL6hdtgQvj3MmY0&address=${address}&fields=geometry,formatted_address,types`);

export { getCategories, getByCategory, getRandomMeal };
