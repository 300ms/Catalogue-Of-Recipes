// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
import Recipes from './Recipes';
import RecipeByName from './RecipeByName';
import Categories from './Categories';
import RecipeDetails from './RecipeDetails';
import Filter from './Filter';

const rootReducer = combineReducers({
  recipes: Recipes,
  categories: Categories,
  recipeByName: RecipeByName,
  recipeDetails: RecipeDetails,
  filter: Filter,
});

export default rootReducer;
