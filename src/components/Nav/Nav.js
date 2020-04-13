import React from "react";
import {
  NavLink
} from 'react-router-dom';
// CSS
import "./Nav.css";

function Nav() {

  const isActive = (match, location) => {
      console.log(match, location)
      return match;
  }

  return (
    <header className="App-header">
      <nav className="App-menu">
        <NavLink 
          className="link" 
          activeClassName="active"
          isActive={isActive}
          exact={true}
          to="/">
            Home
        </NavLink>
        <NavLink 
          className="link" 
          activeClassName="active"
          isActive={isActive}
          exact={true}
          to="/works">
            My Works
        </NavLink>
      </nav>
    </header>
  );
}

export default Nav;
