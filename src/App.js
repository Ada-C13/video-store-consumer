import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

import Navbar from "./components/Navbar";
import Library from "./components/Library";
import Search from "./components/Search";
import Home from "./components/Home";
import Customers from "./components/Customers";
import RentalBox from "./components/RentalBox"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const LIBRARY_URL = "http://localhost:3000/library"
const CUSTOMERS_URL = "http://localhost:3000/customers"
const RENTALS_URL = "http://localhost:3000/"


const App = () => {

  const [library, setLibrary] = useState();
  const [customers, setCustomers] = useState();
  const [moviePick, setMoviePick] = useState();
  const [customerPick, setCustomerPick] = useState();

  useEffect(() => {
    axios.get(LIBRARY_URL)
      .then((response) => {
        const apiLibrary = response.data;
        setLibrary(apiLibrary);
      })
      .catch((error) => {
        // Error Handling, huh?
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get(CUSTOMERS_URL)
      .then((response) => {
        const apiCustomers = response.data;
        setCustomers(apiCustomers);
      })
      .catch((error) => {
        // Error Handling, huh?
        console.log(error);
      });
  }, []);

  const onSelectCustomer = (customer_id) => {
    axios.get(CUSTOMERS_URL) 
      .then((response)=>{
      let count = 1
      const customerList = response.data.map((customer) => {
        customer["id"] = count
        count += 1
        return customer
      })
  
    const selectedCustomer = customerList.find((customer) => {
      return customer.id === customer_id;
    });

    if (selectedCustomer) {
      setCustomerPick(selectedCustomer);
      console.log(customerPick); 
      };
    });
  };
      // I don't really understand this part
  const onSelectMovie = (movie_id) => {
    axios.get(LIBRARY_URL) 
      .then((response)=>{
      let count = 1
      const movieList = response.data.map((movie) => {
        movie["id"] = count
        count += 1
        return movie
      })
  
    const selectedMovie = movieList.find((movie) => {
      return movie.id === movie_id;
    });

    if (selectedMovie) {
      setMoviePick(selectedMovie);
      console.log(moviePick); 
    };
  });
  }

  const clearSelections = () => {
    setMoviePick(null);
    setCustomerPick(null);
  }

  const submitSelections = () => {
    if (moviePick != null && customerPick != null) {
      let dueDate = new Date();
      dueDate.setDate(new Date().getDate()+7);
      axios.post(`${RENTALS_URL}rentals/${moviePick.title}/check-out`, {customer_id: customerPick.id, due_date: dueDate} )
        .then(response => {
          setMoviePick(null);
          setCustomerPick(null);
        })
        .catch(error => {
          console.log(error)
        })
    };
      
    };
  

  return (
    <Router>
      <div> 
        <header>
          <Navbar />
        </header>
        <body>
          <RentalBox moviePick={moviePick} customerPick={customerPick} clearSelectionsCallback={clearSelections}
          submitSelectionsCallback={submitSelections}/>
        </body>
        <Switch>
          <Route path="/library"> 
            <Library library={library} selectMovieCallback={onSelectMovie}/>
          </Route>
          <Route path="/search">
            <Search library={library}/>
          </Route>
          <Route path="/customers">
            <Customers 
            selectCustomerCallback={onSelectCustomer} 
            customers={customers} />
          </Route>
          <Route path="/">
            <Home moviePick={moviePick}/>
          </Route>
        </Switch>

        <footer>
          {/* <RentalBox moviePick={moviePick} customerPick={customerPick}/> */}
        </footer>
      </div>
    </Router>
  )
};

export default App;
