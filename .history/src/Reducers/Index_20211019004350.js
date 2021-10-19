import { combineReducers } from 'redux';
import Recipes from './Recipes';
import RecipeDetail from './RecipeDetail';

const rootReducer = combineReducers({
  recipes: Recipes,
  recipeDetail: RecipeDetail,
});

export default rootReducer;
