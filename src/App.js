import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import axios from "axios";

import Home from './components/Home';
import SearchComponent from './components/SearchContainer';
import Customers from './components/Customers';
import Library from './components/Library';


const App = () => {
  const API_URL_CUSTOMERS = "http://localhost:3000/customers"

  const [customerList, setCustomerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(()=>{
    axios.get(API_URL_CUSTOMERS)
    .then((response) => {
      const apiCustomerList = response.data;
      console.log(response.data)
      setCustomerList(apiCustomerList);
    })
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(error.message);
    });
  }, []);

  const customerComponents = customerList.map((customer) => {
    return(
      <Customers
        name = {customer.name}
        registeredAt = {customer.registerd_at}
        address = {customer.address}
        city = {customer.city}
        state = {customer.state}
        postalCode = {customer.postal_code}
        phone = {customer.phone}
        accountCredit = {customer.account_credit}
        moviesCheckedOutCount = {customer.movies_checked_out_count}
      />
    );
  })

  return (
  <Router>
    <div className="App">
      <ul>
        {/* https://www.golangprograms.com/how-to-create-simple-react-router-to-navigate-multiple-pages.html */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search"> Search for Movies</Link></li>
        <li><Link to="/library">Library</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchComponent} />
        <Route exact path="/library" component={Library} />
        <Route exact path="/customers" component={Customers} />
      </ul> 
    </div>
  </Router> 
  );

}

export default App;
