import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
// Components
import Home from './components/Home';
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
          <header className="App-header">
            <nav className="App-menu">
            <Link className="link active" to="/">Home</Link>
            <Link className="link" to="/works">My Works</Link>
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
