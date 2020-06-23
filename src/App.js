import React, { Component, useState, useEffect } from 'react';
import { CustomerList } from './components/CustomerList.js';
import { MovieLibrary } from './components/MovieLibrary.js';
import { MovieSearch } from './components/MovieSearch.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';

const App = () => {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/library">Movie Library</Link>
            </li>
            <li>
              <Link to="/customers">Custormer List</Link>
            </li>
            <li>
              <Link to="/search">Search Movies</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/library">
            <MovieLibrary />
          </Route>
          <Route path="/customers">
            <CustomerList />
          </Route>
          <Route path="/search">
            <MovieSearch />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// we have to move these to componets in components folder and in these function we need to make api calls to the rails server url

function Home() {
  return <h2>Home</h2>;
}

export default App;