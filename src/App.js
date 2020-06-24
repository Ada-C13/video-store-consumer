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
      <Router>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
          crossorigin="anonymous"></link>
        </head>
        <div>
          
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/">Rentflix</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/search">Search <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/library">Library <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/customers">Customers <span class="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
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

      </Router>
    );
  }
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function Search() {
//   return <h2>Search</h2>;
// }

// function Customers() {
//   return <h2>Customers</h2>;
// }

// function Library() {
//   return <h2>Library</h2>;
// }
export default App;
