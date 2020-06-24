import React, { useState, Component } from 'react';
import './App.css';
import Home from "./components/Home";
import Library from './components/Library';
import Customers from './components/CustomersList';
import Search from './components/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
          crossorigin="anonymous"></link>
        </head>
          
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom px-5">
          <a className="navbar-brand" href="/">Rentflix</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/search">Search <span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/library">Library <span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/customers">Customers <span class="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
        </nav>

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

      </Router>
      </div>
    );
  }
}


export default App;
