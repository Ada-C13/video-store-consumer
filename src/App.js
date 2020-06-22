import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar";
import Library from "./components/Library";
import Search from "./components/Search";
import Home from "./components/Home";
import Customers from "./components/Customers";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <div> 
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
      </div>
    </Router>
  )
};

export default App;
