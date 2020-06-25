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
  const [displayMessage, setDisplayMessage] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState({id: ""})
  const [selectedMovie, setSelectedMovie] = useState(null)
  
  const selectCustomer = (customer) => {
    setSelectedCustomer(customer)
  }

  const selectMovie = (movie) => {
    setSelectedMovie(movie)
  }

  const checkoutMovie = () => {
    console.log("clicked")
    console.log(selectedMovie)
    console.log(selectedCustomer)
    console.log(selectedCustomer.id)

    // generate date
    const date = new Date();
    date.setDate(date.getDate() + 7);

    const API_CHECKOUT_MOVIE_URL = `http://localhost:3000/rentals/${selectedMovie}/check-out?customer_id=${selectedCustomer.id}&due_date=${date}`

    axios.post(API_CHECKOUT_MOVIE_URL)
    .then((response) => { 
      setDisplayMessage(`Movie rented successfully! Return it by ${date}`);
      console.log(response.data);
    })
    .catch((error) => {
      setDisplayMessage("Could not checkout. Make sure a Customer and Movie are selected.");
      console.log(error.message);
    });
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        {displayMessage ? <div className="display-message"><h2>{displayMessage}</h2></div> : ''}
        <section className="selections">
          <span>Selected Customer:  <span className="selected">{selectedCustomer.name}</span></span>
          <span>Selected Movie: <span className="selected">{selectedMovie}</span></span>
          <button className="checkout-button" onClick= {checkoutMovie}><strong>Checkout</strong></button>
        </section>
        <section className="Body">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/customers" component={() => (< Customers onClickCallback={selectCustomer}/>)} />
          <Route path="/library" component={() => (< RentalLibrary onClickCallback={selectMovie}/>)} />
          <Route path="/search" component={Search} />
        </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;