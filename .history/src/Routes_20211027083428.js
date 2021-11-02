import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';
import App from './Components/App';
import RecipeDetails from './Components/RecipeDetails';
// import Error from './Components/presentation/Error';
// import Navbar from './Components/presentation/Navbar';
// import Footer from './Components/presentation/Footer';

const Routes = () => (
  <BrowserRouter>
    <div className="navbar">
      <Link to="/" className="logo" />
      <h2 className="quote">Good food is good mood</h2>
      {/* <Navbar /> */}
    </div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/detail/:id" component={RecipeDetails} />
      <Route component={Error} />
    </Switch>
    {/* <Footer /> */}
  </BrowserRouter>
);

export default Routes;
