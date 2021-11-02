// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Reducers/Index';

const initialState = {
  recipeDetails: {},
  recipes: [],
  categories: [],
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
);

export default store;
