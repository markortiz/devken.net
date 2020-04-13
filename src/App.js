import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
// Components
import Home from './components/Home';
import Works from './components/Works';
// CSS
import './assets/css/normalizer.css';
import './assets/css/flexboxgrid.css';
import './App.css';

function App() {

  const isActive = (match, location) => {
      console.log(match, location)
      return match;
  }

  return (
    <Router>
      <div className="App">
        <div className="App-wrapper">
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
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
