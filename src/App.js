import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// Components
import Home from './components/Home';
import Nav from './components/Nav';
import Works from './components/Works';
// CSS
import './assets/css/normalizer.css';
import './assets/css/flexboxgrid.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-wrapper">
          <Nav />
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
