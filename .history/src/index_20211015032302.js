import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './Components/App';
import rootReducer from './Reducers/Index';
import './index.css';
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

const store = createStore(rootReducer, { meals: randomMeals });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
