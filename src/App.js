import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

import Navbar from "./components/Navbar";
import Library from "./components/Library";
import Search from "./components/Search";
import Home from "./components/Home";
import Customers from "./components/Customers";

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
          <Navbar />
        </header>

        <Switch>
          <Route path="/library">
<<<<<<< HEAD
            <Library library={library} onClick={moviePick}/>
=======
            <Library library={library}/>
>>>>>>> 31c60039aaf5198f67cff811bded83718ca7e41b
          </Route>
          <Route path="/search">
            <Search library={library}/>
          </Route>
          <Route path="/customers">
            <Customers 
            // custDetails={custDetails} 
            // setCustDetailsCallback={customerPick}
            selectCustomerCallback={onSelectCustomer} 
            // currCustomerCallback={setCurrCustomer} 
            customers={customers} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;
