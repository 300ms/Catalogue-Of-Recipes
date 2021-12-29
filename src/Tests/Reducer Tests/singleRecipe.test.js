import recipeDetails from '../../Reducers/recipeDetails';

import {
  FETCH_MEAL_SUCCESS,
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
