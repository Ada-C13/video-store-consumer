// import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Library from "./components/Library";
import Customers from "./components/Customers";

const axios = require('axios');
const API_URL_BASE = 'http://localhost:3000';

const mockCustomer = [
  {
    id: 1,
    name: "Shelley Rocha",
    registered_at: "2015-04-29T14:54:14.000Z",
    address: "Ap #292-5216 Ipsum Rd.",
    city: "Hillsboro",
    state: "OR",
    postal_code: "24309",
    phone: "(322) 510-8695",
    account_credit: 13.15,
    movies_checked_out_count: 0,
  },
  {
    id: 2,
    name: "Curran Stout",
    registered_at: "2014-04-17T04:40:20.000Z",
    address: "Ap #658-1540 Erat Rd.",
    city: "San Francisco",
    state: "California",
    postal_code: "94267",
    phone: "(908) 949-6758",
    account_credit: 35.66,
    movies_checked_out_count: 0,
  },
  {
    id: 3,
    name: "Roanna Robinson",
    registered_at: "2014-11-28T21:14:08.000Z",
    address: "Ap #561-4214 Eget St.",
    city: "Harrisburg",
    state: "PA",
    postal_code: "15867",
    phone: "(323) 336-1841",
    account_credit: 50.39,
    movies_checked_out_count: 0,
  },
  {
    id: 4,
    name: "Carolyn Chandler",
    registered_at: "2014-07-04T18:05:11.000Z",
    address: "133-8707 Arcu. Avenue",
    city: "Fort Wayne",
    state: "IN",
    postal_code: "73684",
    phone: "(234) 837-2886",
    account_credit: 21.79,
    movies_checked_out_count: 0,
  },
];

// App component
const App = () => {
  console.log(`App, will initialize`);
  // Declare and initialize state
  const [selectedMovie, setMovie] = useState(0);
  const [selectedCustomer, setCustomer] = useState(0);

  const [movieList, setMovieList] = useState([]);
  const [customerList, setCustomerList] = useState([]);

  // function to run when component is mounted
  useEffect(() => {
    console.log(`App, component mounted`);
    // get movieList
    axios.get(API_URL_BASE + "/movies")
      .then((response) => {
        const apiMovieList = response.data;
        // set state
        setMovieList(apiMovieList);
      })
      .catch((error) => {
        // handle errors
        // setErrorMessage("could not load movies");
        // console.log(error.message);
      });
    // get customerList

  }, []);

  // Callback function to select movie
  const onMovieSelectCallback = (id) => {
    console.log(`App, onMovieSelectCallback`, id);
    // change state
    setMovie(id);
  };

  // Callback function to select customer
  const onCustomerSelectCallback = (id) => {
    console.log(`App, onCustomerSelectCallback`, id);
    // change state
    setCustomer(id);
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

  const addMovieCallBack = movie => {
    console.log(`App, add movie to library`);
    const newMovieList = movieList;

    // find max id and add 1
    const movieIds = newMovieList.map(movie => movie.id);
    const nextId = Math.max(...movieIds) + 1;

    newMovieList.push(movie);

    setMovieList(newMovieList);
  }

  return (
    <Router>
      <div className="AppRoute">
        {drawNav()}
        {drawSelected()}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/search"
            render={(props) => (
              <Search
                {...props}
                movieList={movieList}
                addMovieCallBack={addMovieCallBack}
              />
            )}
          />
          <Route
            path="/library"
            render={(props) => (
              <Library
                {...props}
                onMovieSelectCallback={onMovieSelectCallback}
                movieList={movieList}
              />
            )}
          />
          <Route
            path="/customers"
            render={(props) => (
              <Customers
                {...props}
                onCustomerSelectCallback={onCustomerSelectCallback}
                customerList={mockCustomer}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
