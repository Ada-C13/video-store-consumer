// import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Library from "./components/Library";
import Customers from "./components/Customers";

const API_URL_BASE = "http://localhost:3000";

// App component
const App = () => {
  console.log(`App, will initialize`);
  // Declare and initialize state
  const [selectedMovie, setMovie] = useState(0);
  const [selectedCustomer, setCustomer] = useState(0);
  const [movieList, setMovieList] = useState([]);
  const [customerList, setCustomerList] = useState([]);

  // use hook/state for proper error handling
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL_BASE + "/movies")
      .then((response) => {
        const apiMovieList = response.data;
        console.log(`apimovieList success`);
        setMovieList(apiMovieList);
      })
      .catch((error) => {
        console.log(`apimovieList error`, error.message);
        setErrorMessage(error.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get(API_URL_BASE + "/customers")
      .then((response) => {
        const apiCustomerList = response.data;
        setCustomerList(apiCustomerList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const selectedMovieTitle = () => {
    console.log(`App, selectedMovieTitle`, selectedMovie);
    let movieTitle = "No movie selected";
    if (selectedMovie > 0) {
      movieList.forEach((movie, index) => {
        if (movie.id === selectedMovie) {
          movieTitle = movie.title;
        }
      });
    }
    return movieTitle;
  };

  const selectedCustomerName = () => {
    console.log(`App, selectedCustomerName`, selectedCustomer);
    let customerName = "No customer selected";
    if (selectedCustomer > 0) {
      customerList.forEach((customer, index) => {
        if (customer.id === selectedCustomer) {
          customerName = customer.name;
        }
      });
    }
    return customerName;
  };

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
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand>Video Store Dashboard</Navbar.Brand>
        <ul className="navbar-nav">
          <Nav.Link href="/">
            <li className="nav-item">Home</li>
          </Nav.Link>
          <Nav.Link href="/search">
            <li className="nav-item">Search</li>
          </Nav.Link>
          <Nav.Link href="/library">
            <li className="nav-item">Library</li>
          </Nav.Link>
          <Nav.Link href="/customers">
            <li className="nav-item">Customers</li>
          </Nav.Link>
        </ul>
      </Navbar>
    );
  };

  const drawSelected = () => {
    console.log(`App, draw selected`);
    return (
      <div>
        <ul className="selected">
          <li>Selected movie: {selectedMovieTitle()}</li>
          <li>Selected customer: {selectedCustomerName()}</li>
        </ul>
      </div>
    );
  };

  const addMovieCallBack = (movie) => {
    console.log(`App, add movie to library`);
    // if external id is unique:
    // if (!movieList.find(listMovie => listMovie.external_id === movie.external_id)) { console.log("unique")} else {console.log("not unique")}

    // post movie
    axios
      .post(API_URL_BASE + "/movies", movie)
      .then(() => {
        const newMovieList = movieList;
        newMovieList.push(movie);
        // set state
        setMovieList(newMovieList);
      })
      .catch((error) => {
        // handle errors
        setErrorMessage("Cannot add movie");
        console.log(error.message);
      });
  };

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
                customerList={customerList}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
