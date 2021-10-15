import { SUCCESS, FAIL } from '../helpers/helper';

const initialState = [];

import { getRandomMeal } from './Requests/MealsApiRequests';

const RecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return [...state, meals[0]];
    case FAIL:
      return state;
    default:
      return state;
  }
}
