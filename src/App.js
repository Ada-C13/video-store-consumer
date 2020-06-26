// import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Alert from "react-bootstrap/Alert";

import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Library from "./components/Library";
import Customers from "./components/Customers";
import Checkout from "./components/Checkout";

const API_URL_BASE = "http://localhost:3000";
const CHECKOUT_NEVER = 0;
const CHECKOUT_SUCCESS = 1;
const CHECKOUT_FAILURE = 2;

// App component
const App = () => {
  console.log(`App, will initialize`);
  // Declare and initialize state
  const [selectedMovie, setMovie] = useState(0);
  const [selectedCustomer, setCustomer] = useState(0);
  const [movieList, setMovieList] = useState([]);
  const [customerList, setCustomerList] = useState([]);
  const [checkoutStatus, setCheckoutStatus] = useState(CHECKOUT_NEVER);

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

    axios
      .get(API_URL_BASE + "/customers")
      .then((response) => {
        const apiCustomerList = response.data;
        setCustomerList(apiCustomerList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, [checkoutStatus]);

  const selectedMovieData = () => {
    console.log(`App, selectedMovieData`, selectedMovie);
    let movieData = null;
    if (selectedMovie > 0) {
      movieList.forEach((movie, index) => {
        if (movie.id === selectedMovie) {
          movieData = movie;
        }
      });
    }
    return movieData;
  };

  const selectedMovieTitle = () => {
    console.log(`App, selectedMovieTitle`, selectedMovie);
    let movieData = selectedMovieData();
    if (!movieData) {
      return `No movie selected`;
    } else {
      return movieData.title;
    }
  };

  // returns all data for selected customer
  const selectedCustomerData = () => {
    console.log(`App, selectedCustomerName`, selectedCustomer);
    let customerData = null;
    if (selectedCustomer > 0) {
      customerList.forEach((customer, index) => {
        if (customer.id === selectedCustomer) {
          customerData = customer;
        }
      });
    }
    return customerData;
  };

  // returns name for selected customer
  const selectedCustomerName = () => {
    console.log(`App, selectedCustomerName`, selectedCustomer);
    let customerData = selectedCustomerData();
    if (!customerData) {
      return `No customer selected`;
    } else {
      return customerData.name;
    }
  };

  // Callback function to select movie
  const onMovieSelectCallback = (id) => {
    console.log(`App, onMovieSelectCallback`, id);
    // change state
    setMovie(id);
    setCheckoutStatus(CHECKOUT_NEVER);
  };

  // Callback function to select customer
  const onCustomerSelectCallback = (id) => {
    console.log(`App, onCustomerSelectCallback`, id);
    // change state
    setCustomer(id);
    setCheckoutStatus(CHECKOUT_NEVER);
  };

  // Callback function to perform checkout
  const onCheckoutCallback = () => {
    console.log(`App, onCheckoutCallback`);
    let date = new Date(); // add 7 days
    date.setDate(new Date().getDate() + 7);

    // perform checkout
    axios
      .post(API_URL_BASE + `/rentals/${selectedMovieTitle()}/check-out`, {
        title: selectedMovieTitle(),
        customer_id: selectedCustomer,
        due_date: date.toISOString(),
      })
      .then((response) => {
        console.log(`Checkout success`, response.data);
        setCheckoutStatus(CHECKOUT_SUCCESS);
      })
      .catch((error) => {
        console.log(`Checkout failure`, error.message);
        setCheckoutStatus(CHECKOUT_FAILURE);
        setErrorMessage(error.message);
      });

    setMovie(0);
  };

  const renderNav = () => {
    console.log(`App, render navigation`);
    return (
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand>GET f l i x</Navbar.Brand>
        <ul className="navbar-nav">
          <Link to="/">
            <li className="nav-item">Home</li>
          </Link>
          <Link to="/search">
            <li className="nav-item">Search</li>
          </Link>
          <Link to="/library">
            <li className="nav-item">Library</li>
          </Link>
          <Link to="/customers">
            <li className="nav-item">Customers</li>
          </Link>
          <Link to="/checkout">
            <li className="nav-item">Checkout</li>
          </Link>
        </ul>
      </Navbar>
    );
  };

  const renderSelected = () => {
    console.log(`App, render selected`);
    return (
      <div>
        <ul className="selected">
          <Alert variant="primary">
            Selected movie: {selectedMovieTitle()}
          </Alert>
          <Alert variant="primary">
            Selected customer: {selectedCustomerName()}
          </Alert>
        </ul>
      </div>
    );
  };

  const renderFooter = () => {
    return (
      <footer>
        <div class="padded-container"></div>
        <div class="copyright">
          <p>© 2020 Copyright: Suely and Yoyo, ADA C13</p>
        </div>
      </footer>
    );
  };

  const addMovieCallBack = (movie) => {
    console.log(`App, add movie to library`);

    // post movie
    axios
      .post(API_URL_BASE + "/movies", movie)
      .then(() => {
        const newMovieList = [...movieList, movie];
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
        {renderNav()}
        {renderSelected()}
        {renderFooter()}
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
          <Route
            path="/checkout"
            render={(props) => (
              <Checkout
                {...props}
                movieData={selectedMovieData()}
                customerData={selectedCustomerData()}
                onCheckoutCallback={onCheckoutCallback}
                checkoutStatus={checkoutStatus}
                errorMessage={errorMessage}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
