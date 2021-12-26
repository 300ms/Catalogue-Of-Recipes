/* eslint-disable max-len */
import {
  FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, CATEGORY_UPDATE, FETCH_MEAL_SUCCESS, FETCH_CATEGORIES_SUCCESS, RESET,
} from './Types';

const getRecipesSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products,
});

const fetchRecipesError = (error) => ({
  type: FETCH_PRODUCTS_ERROR,
  error,
});
const UPDATE_CATEGORY = (category) => ({
  type: CATEGORY_UPDATE,
  category,
});

const fetchSingleMeal = (details) => ({
  type: FETCH_MEAL_SUCCESS,
  details,
});

const fetchCategories = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories,
});

const resetSelected = () => ({ type: RESET });

export {
  fetchRecipesError,
  getRecipesSuccess,
  UPDATE_CATEGORY,
  fetchSingleMeal,
  resetSelected,
  fetchCategories,
};
