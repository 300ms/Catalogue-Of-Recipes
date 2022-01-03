import recipeDetails from '../../Reducers/RecipeDetails';

import {
  FETCH_MEAL_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from '../../Constants/Types';

const initialState = {
  pending: false,
  details: {},
  error: undefined,
};

describe('Empty recipes', () => {
  const details = { category: 'Beef', area: 'British', Ingredients: ['Beef', 'Plain Flour', 'Rapeseed Oil'] };
  it('Have only 1 recipe', () => {
    expect(recipeDetails(initialState, { type: FETCH_MEAL_SUCCESS, details }))
      .toEqual({ ...initialState, details });
  });
});

describe('Fetch Failure', () => {
  const errorMessage = 'Fetch Failure';
  it('Action type is FETCH_MEAL_FAILURE', () => {
    expect(recipeDetails(initialState, { type: FETCH_PRODUCTS_ERROR, error: errorMessage }))
      .toEqual({ ...initialState, error: errorMessage });
  });
});
