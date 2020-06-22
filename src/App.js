import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {

  return (
    <Router>

      <header>
        <Navbar />
      </header>

      <Switch>
        <Route path="/library">
          <Library />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/customers">
          <Customers />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
};

export default App;
