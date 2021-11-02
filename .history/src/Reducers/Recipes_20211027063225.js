import {
  RECIPES, RECIPE_BY_NAME,
} from '../Actions/Types';

const recipes = (state = {}, action) => {
  switch (action.type) {
    case RECIPES:
      return {
        ...state,
        meals: action.payload,
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
