// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
import Recipes from './Recipes';

const rootReducer = combineReducers({
  recipes: Recipes,
});

export default rootReducer;
