import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';
import { getRandomMeal } from '../Components/Meal';

const allPromises = [];

for (let i = 0; i < 5; i += 1) {

}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
