import { RECIPES, RECIPE_DETAILS, CATEGORIES } from '../actions/types';

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
        detailMeal: action.payload,
      };

    case CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default recipes;
