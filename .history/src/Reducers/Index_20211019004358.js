import { combineReducers } from 'redux';
import Recipes from './Recipes';
import RecipeDetails from './RecipeDetails';

const rootReducer = combineReducers({
  recipes: Recipes,
  recipeDetail: RecipeDetails,
});

export default rootReducer;
