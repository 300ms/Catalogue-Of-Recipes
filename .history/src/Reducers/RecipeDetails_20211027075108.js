import { RECIPE_DETAILS } from '../Actions/Types';

const recipeDetails = (state = {}, action) => {
  switch (action.type) {
    case RECIPE_DETAILS:
      return {
        ...state,
        recipeDetails: action.payload,
      };

    default:
      return state;
  }
};

export default recipeDetails;
