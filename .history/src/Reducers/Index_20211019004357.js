import { combineReducers } from 'redux';
import Recipes from './Recipes';
import RecipeDetail from './RecipeDetails';

const rootReducer = combineReducers({
  recipes: Recipes,
  recipeDetail: RecipeDetails,
});

export default rootReducer;
