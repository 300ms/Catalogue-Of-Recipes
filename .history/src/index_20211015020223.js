import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './Components/App';
import './index.css';
import { getRandomMeal } from './Requests/MealsApiRequests';

const allPromises = [];

for (let i = 0; i < 5; i += 1) {
  allPromises.push(getRandomMeal);
}

await Promise.all(allPromises);

const store = createStore(await Promise.all(allPromises));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
