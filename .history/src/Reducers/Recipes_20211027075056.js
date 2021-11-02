import {
  RECIPES,
} from '../Actions/Types';

const recipes = (state = {}, action) => {
  switch (action.type) {
    case RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };

    default:
      return state;
  }
};

export default recipes;
