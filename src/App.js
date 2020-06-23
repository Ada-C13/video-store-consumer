import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import CustomerList from './components/CustomerList';
import MovieSearch from './components/MovieSearch';
import MovieLibrary from './components/MovieLibrary';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/'

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
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/library">Movie Library</Link>
            </li>
            <li>
              <Link to="/search">Movie Search</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/customers">
            <CustomerList />
          </Route>
          <Route path="/library">
            <MovieLibrary />
          </Route>
          <Route path="/search">
            <MovieSearch />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
