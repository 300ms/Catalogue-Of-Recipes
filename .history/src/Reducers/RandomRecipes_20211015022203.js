import { SUCCESS, FAIL } from '../helpers/helper';
import { getRandomMeal } from './Requests/MealsApiRequests';

const RandomRecipesReducer = (state = [], action) => {
  switch (action.type) {
    case SUCCESS:
      return [...state, meals[0]];
    case FAIL:
      return state;
    default:
      return state;
  }
};

export default RandomRecipesReducer;
