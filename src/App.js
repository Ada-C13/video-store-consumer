import React, { useState } from 'react';
import AppHeader from './components/AppHeader'
import Customers from './components/Customers'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <AppHeader
        text="Click Refresher in React"
        counter={counter}
        clickCallback={incrementCounter}
        />
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>

      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
    <Switch>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
};

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
