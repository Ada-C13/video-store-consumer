import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import logo from "./logo.svg";

import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Library from "./components/Library";
import Customers from "./components/Customers";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="AppRoute">
          {drawNav()}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/library" component={Library} />
            <Route path="/customers" component={Customers} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function drawNav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/search">
          <li>Search</li>
        </Link>
        <Link to="/library">
          <li>Library</li>
        </Link>
        <Link to="/customers">
          <li>Customers</li>
        </Link>
      </ul>
    </nav>
  );
}

export default App;
