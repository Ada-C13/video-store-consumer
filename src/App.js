// import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Library from "./components/Library";
import Customers from "./components/Customers";
import Checkout from "./components/Checkout";

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
  };

  // Callback function to select customer
  const onCustomerSelectCallback = (id) => {
    console.log(`App, onCustomerSelectCallback`, id);
    // change state
    setCustomer(id);
  };

  // Callback function to perform checkout
  const onCheckoutCallback = () => {
    console.log(`App, onCheckoutCallback`);
    // perform checkout
    axios 
      // /rentals/:title/check-out(.:format)
      // params[:movie_id] params[:customer_id] params[:due_date])
      .post(API_URL_BASE + `/rentals/${selectedMovieTitle()}/check-out`, {
        title: selectedMovieTitle(),
        customer_id: selectedCustomer,
        due_date: (new Date()).toISOString(),
      })
      .then((response) => {
        console.log(`Checkout success`, response.data);
        // const updatedCardList = [response.data, ...cardsList];
        // setCardsList(updatedCardList);
      })
      .catch((error) => {
        console.log(`Checkout failure`, error.message);

        setErrorMessage(error.message);
      });

    setCustomer(0);
    setMovie(0);
  };

  const renderNav = () => {
    console.log(`App, render navigation`);
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
          <Link to="/checkout">
            <li>Checkout</li>
          </Link>
        </ul>
      </nav>
    );
  };

  const renderSelected = () => {
    console.log(`App, render selected`);
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
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
