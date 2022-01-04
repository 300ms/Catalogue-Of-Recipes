import {
  getCategories,
  getSingleRecipe,
} from '../../Actions/index';

import {
  FETCH_MEAL_SUCCESS,
  FETCH_CATEGORIES_SUCCESS,
} from '../../Constants/Types';

describe('Get Categories', () => {
  it('Action to get all categories', () => {
    const expectedAction = {
      type: FETCH_CATEGORIES_SUCCESS,
      categories: ['Pasta', 'Pork', 'Seafood', 'Beef', 'Chicken', 'Dessert', 'Lamb', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast', 'Miscellaneous', 'Goat'],
    };
    expect(getCategories(['Pasta', 'Pork', 'Seafood', 'Beef', 'Chicken', 'Dessert', 'Lamb', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast', 'Miscellaneous', 'Goat'])).toEqual(expectedAction);
  });
});

describe('Get Categories', () => {
  it('Action to get all categories', () => {
    const data = { name: 'beef', category: 'Beef' };
    const expectedAction = {
      type: FETCH_MEAL_SUCCESS,
      details: data,
    };
    expect(getSingleRecipe(data)).toEqual(expectedAction);
  });
});
