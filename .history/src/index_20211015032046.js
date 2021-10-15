import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './Components/App';
import rootReducer from './Reducers/Index';
import './index.css';
import { getRandomMeal } from './Requests/MealsApiRequests';

const allPromises = [];

for (let i = 0; i < 10; i += 1) {
  allPromises.push(getRandomMeal);
}

const mealList = await Promise.all(allPromises);

const store = createStore(rootReducer, { meals: mealList });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
