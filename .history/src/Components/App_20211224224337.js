/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import AllRecipes from '../Containers/AllRecipes';
import RecipeDetails from '../Containers/RecipeDetails';
import NavBar from '../Containers/Nav';
import AllCategories from '../Containers/Categories';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/" component={AllCategories} exact />
      <Route path="/category/:category" component={AllRecipes} />
      <Route path="/meal/:id" component={RecipeDetails} />
    </Switch>
  </div>
);

export default App;
