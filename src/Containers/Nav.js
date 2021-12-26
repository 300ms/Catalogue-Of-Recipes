/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav header">
      <Link className="home-link" to="/">
        <h4 className=" nav-text">Catalogue Of Recipes</h4>
      </Link>
    </div>
  );
}

export default NavBar;
