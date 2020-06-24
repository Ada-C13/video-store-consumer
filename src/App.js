import React, {useState} from 'react';
import './App.css';
import Nav from './Nav';
import Customers from './Customers';
import RentalLibrary from './RentalLibrary';
import Search from './Search';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';

const App = () => {

  const [errorMessage, setErrorMessage] = useState(null);
  // create state variable for selected customer
  const [selectedCustomer, setSelectedCustomer] = useState(null)

  // create state variable for selected movie 
  const [selectedMovie, setSelectedMovie] = useState(null)
  
  // set selectedCustomer
  const selectCustomer = (customer) => {
    setSelectedCustomer(customer)
  }

  // create function that uses selectedCustomer and selectedMovie to checkout
  const checkoutMovie = () => {

    // set up API call 
    const API_CHECKOUT_MOVIE_URL = `http://localhost:3000/${selectedMovie.title}/checkout`

    // create due date
    const date = new Date();
    date.setDate(date.getDate() + 7);

    const newRentalFields = {
      customer_id: selectedCustomer.id, 
      due_date: date
    }

    // make API call 
    axios.post(API_CHECKOUT_MOVIE_URL, newRentalFields)
    .then((response) => { 
      console.log("rented new movie succesful")
      console.log(response.data)
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });

  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <p>Selected Customer: {selectedCustomer}</p>
        <p>Selected Movie: {selectedMovie}</p>
        <button onClick= {checkoutMovie}>Checkout</button>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/customers" component={() => (< Customers onClickCallback={selectCustomer}/>)} />
          <Route path="/library" component={RentalLibrary} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>

      

    </Router>
  );
}

export default App;