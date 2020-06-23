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
  }

  return (
    <Router>
      <div> 
        <header>
          <Navbar moviePick={moviePick} customerPick={customerPick}/>
        </header>

        <Switch>
          <Route path="/library">
            <Library 
            library={library} 
            onClick={moviePick}/>
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
            <Home />
          </Route>
          <Route path="/rental">
            <RentalBox moviePick={moviePick} customerPick={customerPick} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;
