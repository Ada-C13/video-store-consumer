import React, { useEffect, useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import axios from 'axios'; 
import PropTypes from 'prop-types';
import ReactNotification, { store } from 'react-notifications-component'

import './App.css';
import 'react-notifications-component/dist/theme.css'

import Home from './components/Home';
import Search from './components/Search';
import Movies from './components/Movies';
import Customers from './components/Customers';
import Checkout from './components/Checkout';

const App = () => {
  const [ searchResults, setSearchResults ] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState(null);
  const [ successMessage, setSuccessMessage ] = useState(null);
  
  const [ customerList, setCustomerList ] = useState([]);
  const [ selectedCustomer, setSelectedCustomer ] = useState(null);

  const [ movieList, setMovieList] = useState([]);
  const [ selectedMovie, setSelectedMovie ] = useState(null);

  const searchMovies = (search) => {
    axios.get('http://localhost:3000/movies', { params: search })
    .then((response) => {
      setSearchResults(response.data);
      setSuccessMessage(`Here are your search results`);
    })
    .catch((error) => {
      setErrorMessage(Object.values(error.response.data.errors));
    });
  };

  const getMovies = useCallback(() => {
    axios.get('http://localhost:3000/movies')
    .then((response) => {
      setMovieList(response.data);
    })
    .catch((error) => {
      setErrorMessage(Object.values(error.response.data.errors));
    })
  }, []);

  useEffect( getMovies, [ getMovies ]);

  const selectMovie = (movie) => {
    setSelectedMovie(movie);
    setSuccessMessage(`${movie.title} has been selected`);
  }

  const getCustomers = useCallback(() => {
    axios.get('http://localhost:3000/customers')
    .then((response) => {
      setCustomerList(response.data);
    })
    .catch((error) => {
      setErrorMessage(Object.values(error.response.data.errors));
    });
  }, []);

  useEffect( getCustomers, [ getCustomers ]);

  const selectCustomer = (customer) => {
    setSelectedCustomer(customer);
    setSuccessMessage(`${customer.name} has been selected`);
  }

  const createRental = (movie, customer, due_date) => {
    if (!customer) {
      setErrorMessage([["Please select a customer"]]);
      return;
    } else if (!movie) {
      setErrorMessage([["Please select a movie"]]);
      return;
    }

    const params = {
      title: movie.title,
      customer_id: customer.id,
      due_date: due_date
    }

    axios.post(`http://localhost:3000/rentals/${movie.title}/check-out`, params)
    .then((_response) => {
      setSuccessMessage(`${movie.title} has been checked out to ${customer.name}`);
      setSelectedCustomer(null);
      setSelectedMovie(null);
    })
    .catch((error) => {
      setErrorMessage(Object.entries(error.response.data.errors));
    });
  }

  if (errorMessage) {
    errorMessage.forEach(error => {
      let message = null;
      if (error.length > 1) {
        message = `${error[0]} ${error[1][0]}`;
      } else {
        message = error[0];
      }

      store.addNotification({
        title: "A problem occurred!",
        message: message,
        type: "warning",
        insert: "top",
        container: "top-left",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    });

    setErrorMessage(null);
  }

  if (successMessage) {
    store.addNotification({
      title: "Success!",
      message: successMessage,
      type: "success",
      insert: "top",
      container: "top-left",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });

    setSuccessMessage(null);
  }

  return (
    <Router>
      <header className="App-header">
        <nav className="App-nav">
          <h1 className="App-title"><a href="/">I<span role="img" aria-label="heart">♥️</span>VIDEO</a></h1>
          <div className="App-nav-links">
            <Link to="/" className="App-nav-links__item">Home</Link>
            <Link to="/search" className="App-nav-links__item">Movie Search</Link>
            <Link to="/library" className="App-nav-links__item">Movie Library</Link>
            <Link to="/customers" className="App-nav-links__item">Customer List</Link>
          </div>
        </nav>

        <div className="App-selected">
          <h3>Current Selection</h3>
          <div className="App-selected__customer">
            {
              selectedCustomer && (
                <span className="App-selected__customer-name">Customer: {selectedCustomer.name}</span>
              )
            }
          </div>
          <div className="App-selected__movie">
            {
              selectedMovie && (
                <span className="App-selected__movie-name">Movie: {selectedMovie.title} {selectedMovie.name}</span>
              )
            }
          </div>
          <div className="App-selected__checkout">
            <Link to="/checkout" className="App-selected__checkout-button">Checkout</Link>
          </div>
        </div>
      </header>

      <section className="App-errors">
          <ReactNotification />
        </section>

      <main className="App-content">
        <Switch>
          <Route path="/search">
            <Search results={searchResults} onSearchMovieCallback={searchMovies} />
          </Route>
          <Route path="/library">
            <Movies list={movieList} onSelectCallback={selectMovie} />
          </Route>
          <Route path="/customers">
            <Customers list={customerList} onSelectCallback={selectCustomer} />
          </Route>
          <Route path="/checkout">
            <Checkout customer={selectedCustomer} movie={selectedMovie} onSubmitCallback={createRental} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
