import {
  RECIPE_BY_NAME,
} from '../Actions/Types';

const recipeByName = (state = {}, action) => {
  switch (action.type) {
    case RECIPE_BY_NAME:
      return {
        ...state,
        recipeByName: action.payload,
      };

    default:
      return state;
  }
};

export default recipeByName;
