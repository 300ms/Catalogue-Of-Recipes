import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Reducers/Index';
import { getRandomMeal } from './Requests/MealsApiRequests';

const allPromises = [];
const randomMeals = [];
for (let i = 0; i < 10; i += 1) {
  allPromises.push(getRandomMeal);
}

const mealResponses = await Promise.all(allPromises);
mealResponses.forEach((response) => {
  randomMeals.push(response.meals[0]);
});

const initialState = {
  randomMeals,
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
