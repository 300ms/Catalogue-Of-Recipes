import { combineReducers } from 'redux';
import recipes from './Recipes';
import filter from './Filter';

const rootReducer = combineReducers({
  recipes,
  filter,
});

export default rootReducer;
