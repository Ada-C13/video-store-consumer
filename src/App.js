import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Navbar from "./components/Navbar";
import Library from "./components/Library";
import Search from "./components/Search";
import Home from "./components/Home";
import Customers from "./components/Customers";
import RentalBox from "./components/RentalBox";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ErrorCard from "./components/ErrorCard";
import SuccessCard from "./components/SuccessCard";

const LIBRARY_URL = "http://localhost:3000/library";
const CUSTOMERS_URL = "http://localhost:3000/customers";
const RENTALS_URL = "http://localhost:3000/";

const App = () => {
  const [library, setLibrary] = useState();
  const [customers, setCustomers] = useState();
  const [moviePick, setMoviePick] = useState();
  const [customerPick, setCustomerPick] = useState();
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const setErrorCallback = (data) => {
    setErrorMessage(data);
  };

  useEffect(() => {
    axios
      .get(LIBRARY_URL)
      .then((response) => {
        const apiLibrary = response.data;
        setLibrary(apiLibrary);
        setErrorMessage(null);
        setSuccessMessage(null);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(CUSTOMERS_URL)
      .then((response) => {
        const apiCustomers = response.data;
        setCustomers(apiCustomers);
        setSuccessMessage(null);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error);
      });
  }, []);

  const onSelectCustomer = (customer_id) => {
    axios.get(CUSTOMERS_URL).then((response) => {
      let count = 1;
      const customerList = response.data.map((customer) => {
        customer["id"] = count;
        count += 1;
        return customer;
      });

      const selectedCustomer = customerList.find((customer) => {
        return customer.id === customer_id;
      });

      if (selectedCustomer) {
        setCustomerPick(selectedCustomer);
        setSuccessMessage(null);
        console.log(customerPick);
      }
    });
  };
  // I don't really understand this part
  const onSelectMovie = (movie_id) => {
    axios.get(LIBRARY_URL).then((response) => {
      let count = 1;
      const movieList = response.data.map((movie) => {
        movie["id"] = count;
        count += 1;
        return movie;
      });

      const selectedMovie = movieList.find((movie) => {
        return movie.id === movie_id;
      });

      if (selectedMovie) {
        setMoviePick(selectedMovie);
        setSuccessMessage(null);
        console.log(moviePick);
      }
    });
  };

  const clearSelections = () => {
    setMoviePick(null);
    setCustomerPick(null);
    setSuccessMessage(null);
  };

  const submitSelections = () => {
    if (moviePick != null && customerPick != null) {
      let dueDate = new Date();
      dueDate.setDate(new Date().getDate() + 7);
      axios
        .post(`${RENTALS_URL}rentals/${moviePick.title}/check-out`, {
          customer_id: customerPick.id,
          due_date: dueDate,
        })
        .then((response) => {
          setMoviePick(null);
          setCustomerPick(null);
          setSuccessMessage("Rental successfully created.");
          console.log(response.message);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.log(error);
        });
    }
  };

  return (
    <Router>
      <header>
        <Navbar setError={setErrorCallback} />
      </header>

      <main>
        <Switch>
          <Route exact path="/" />
          <Route path="/home" />
          <Route path="/">
            {errorMessage && <ErrorCard message={errorMessage} />}
            {successMessage && <SuccessCard message={successMessage} />}
            <RentalBox
              moviePick={moviePick}
              customerPick={customerPick}
              clearSelectionsCallback={clearSelections}
              submitSelectionsCallback={submitSelections}
            />
          </Route>
        </Switch>

        <Switch>
          <Route path="/library">
            <Library library={library} selectMovieCallback={onSelectMovie} />
          </Route>
          <Route path="/search">
            <Search library={library} setError={setErrorCallback} />
          </Route>
          <Route path="/customers">
            <Customers
              selectCustomerCallback={onSelectCustomer}
              customers={customers}
            />
          </Route>
          <Route path="/">
            <Home moviePick={moviePick} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
