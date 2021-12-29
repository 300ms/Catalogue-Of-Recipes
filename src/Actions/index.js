import {
  FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, UPDATE_CATEGORY,
  FETCH_MEAL_SUCCESS, FETCH_CATEGORIES_SUCCESS, RESET,
} from '../Constants/Types';

const getRecipesSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products,
});

const getRecipesError = (error) => ({
  type: FETCH_PRODUCTS_ERROR,
  error,
});
const updateCategory = (category) => ({
  type: UPDATE_CATEGORY,
  category,
});

const getSingleRecipe = (details) => ({
  type: FETCH_MEAL_SUCCESS,
  details,
});

const getCategories = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories,
});

const resetSelected = () => ({ type: RESET });

export {
  getRecipesError,
  getRecipesSuccess,
  updateCategory,
  getSingleRecipe,
  resetSelected,
  getCategories,
};
