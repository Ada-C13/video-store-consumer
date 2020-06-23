// import React, { Component } from "react";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

// import logo from "./logo.svg";

import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Library from "./components/Library";
import Customers from "./components/Customers";

// App component
const App = () => {
  console.log(`App, will initialize`);
  // Declare and initialize state
  const [selectedMovie, setMovie] = useState("");
  const [selectedCustomer, setCustomer] = useState("");

  // Callback function to select movie
  const onMovieSelectCallback = (strMovie) => {
    console.log(`App, onMovieSelectCallback`, strMovie);
    // change state
    setMovie(strMovie);
  };

  // Callback function to select customer
  const onCustomerSelectCallback = (strCustomer) => {
    console.log(`App, onCustomerSelectCallback`, strCustomer);
    // change state
    setCustomer(strCustomer);
  };

  const drawNav = () => {
    console.log(`App, draw navigation`);
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
  };

  const drawSelected = () => {
    console.log(`App, draw selected`);
    return (
      <div>
        <ul className="selected">
          <li>Selected movie: {selectedMovie}</li>
          <li>Selected customer: {selectedCustomer}</li>
        </ul>
      </div>
    );
  };

  // render() {
  return (
    <Router>
      <div className="AppRoute">
        {drawNav()}
        {drawSelected()}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/library" component={Library} />
          <Route path="/customers" component={Customers} />
        </Switch>
      </div>
    </Router>
  );
  // }
};

export default App;
