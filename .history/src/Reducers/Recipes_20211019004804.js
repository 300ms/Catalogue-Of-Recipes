import {
  RECIPES, RECIPE_DETAILS, CATEGORIES, RECIPE_BY_NAME,
} from '../actions/types';

const recipes = (state = {}, action) => {
  switch (action.type) {
    case RECIPES:
      return {
        ...state,
        meals: action.payload,
      };

    case RECIPE_DETAILS:
      return {
        ...state,
        recipeDetails: action.payload,
      };

    case CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case RECIPE_BY_NAME:
      return {
        ...state,
        searchedItems: action.payload,
      };

    default:
      return state;
  }
};

export default recipes;
