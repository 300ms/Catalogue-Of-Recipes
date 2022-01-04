import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../index.css';
import AllRecipes from '../Containers/AllRecipes';
import RecipeDetails from '../Containers/RecipeDetails';
import Nav from '../Containers/Nav';
import Categories from '../Containers/AllCategories';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" component={Categories} exact />
        <Route path="/category/:category" component={AllRecipes} />
        <Route path="/meal/:id" component={RecipeDetails} />
      </Switch>
    </div>
  );
}

export default App;
