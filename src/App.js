import React, { Component, useState, useEffect } from 'react';
import CustomerList from './components/CustomerList.js';
import MovieLibrary from './components/MovieLibrary.js';
import MovieSearch from './components/MovieSearch.js';
import Rental from './components/Rental.js';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

const App = () => {
  const [movie, setMovie] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [message, setMessage] = useState("");

  const selectMovie = (chosenMovie) => {
    setMovie(chosenMovie);
  };

  const selectCustomer = (chosenCustomer) => {
    setCustomer(chosenCustomer);
  };

  // found a similar method on stack overflow and used it here with minor changes
  const dueDate = () => {
    const result = new Date();
    result.setDate(result.getDate() + 14);
    return result;
  }

  const rentMovie = () => {
    axios.post(`http://localhost:3000//rentals/${movie.title}/check-out`, {
        customer_id: customer.id,
        due_date: dueDate()
      })
        .then((/*response*/) => {
          setMessage(
            "Succesfully Rented"
          );
        })
        .catch((error) => {
          setMessage(error.message);
        });
  }

  return (
    <Router>
      <div>
        <nav className="navigation-bar">
          <ul className="navigation-elements" >
            <li>
              <h3><Link to="/">Home</Link></h3>
            </li>
            <li>
              <h3><Link to="/library">Movie Library</Link></h3>
            </li>
            <li>
              <h3><Link to="/customers">Custormer List</Link></h3>
            </li>
            <li>
              <h3><Link to="/search">Search Movies</Link></h3>
            </li>
          </ul>
          <Rental {...{movie, customer, rentMovie}} />
          <p>{message}</p>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/library">
            <MovieLibrary pickMovieCallback = {selectMovie} />
          </Route>
          <Route path="/customers">
            <CustomerList pickCustomerCallback = {selectCustomer} />
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

function Home() {
  return <h1 className="home-message">Welcome to Faezeh and Olga's Video Store</h1>;
}

export default App;