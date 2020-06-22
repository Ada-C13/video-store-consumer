import React, { useState, Component } from 'react';
import './App.css';
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>

      
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            heyy
        </p>
      </div>
      </Router>
    );
  }
}

// function Home() {
//   return <h2>Home</h2>;
// }

function Search() {
  return <h2>Search</h2>;
}

function Customers() {
  return <h2>Customers</h2>;
}

function Library() {
  return <h2>Library</h2>;
}
export default App;
