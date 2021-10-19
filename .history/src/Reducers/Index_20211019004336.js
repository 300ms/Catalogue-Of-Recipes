import { combineReducers } from 'redux';
import Recipes from './Recipes';

const rootReducer = combineReducers({
  recipes: Recipes,
  recipeDetail: RecipeDetail,
});

export default rootReducer;
