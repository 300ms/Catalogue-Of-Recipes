import { combineReducers } from 'redux';
import Recipes from './Recipes';

const rootReducer = combineReducers({
  meals: Recipes,
});

export default rootReducer;
