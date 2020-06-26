import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Home from './components/Home';
import SearchComponent from './components/SearchContainer';
import Customers from './components/Customers';
import Library from './components/Library';
import Details from './components/Details';
import Button from 'react-bootstrap/Button';


// http://localhost:3000/rentals/{title}/check-out 
const App = () => {
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [message, setMessage] = useState(null);

  const updateMovie = (selectedMovie) => {
    setCurrentMovie(selectedMovie)
  }

  const updateCustomer = (selectedCustomer) => {
    setCurrentCustomer(selectedCustomer)
  }

  const API_URL_CHECKOUT = `http://localhost:3000/rentals/${currentMovie}/check-out`
  const checkOut = (event) =>{
    event.preventDefault();

    axios.post(API_URL_CHECKOUT, {
      customer_id: currentCustomer
    })
    .then(() => {
      setMessage(`Customer with ID ${currentCustomer} successfully checked out ${currentMovie}!`)
    })
    .catch((error) => {
      console.log(error.message)
      setMessage(`Failed to checkout!`)
    });
  }

  const API_URL_RETURN = `http://localhost:3000/rentals/${currentMovie}/return`
  const returnMovie = (event) =>{
    event.preventDefault();

    axios.post(API_URL_RETURN, {
      customer_id: currentCustomer
    })
    .then(() => {
      setMessage(`Customer with ID ${currentCustomer} successfully returned ${currentMovie}!`)
    })
    .catch((error) => {
      console.log(error.message)
      setMessage(`Failed to return!`)
    });
  }



  return (
    <>
      <div className="header">
        <h2>Welcome to the Video Store Admin Portal</h2>
      </div>

      <div className="note">
        <p>Selected Customer: {currentCustomer}</p>
        <p>Selected Movie: {currentMovie}</p>
        <Button variant="outline-secondary" onClick={checkOut}>Check-out</Button>
        <Button variant="outline-secondary" onClick={returnMovie}>Return</Button>
        <br/>
        {message}
      </div>
      
      <Router>
          <ul className="navbar">
            {/* https://medium.com/the-andela-way/understanding-the-fundamentals-of-routing-in-react-b29f806b157e*/}
            <Link to="/">Home</Link>
            <Link to="/search"> Search for Movies</Link>
            <Link to="/library">Library</Link>
            <Link to="/customers">Customers</Link>
          </ul> 
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchComponent} />
            <Route exact path="/library"
            render={(props) => <Library onUpdateCurrentMovie={updateMovie}/>}/>
            <Route exact path="/customers"
            render={(props) => <Customers onUpdateCurrentCustomer={updateCustomer}/>}/>
            <Route exact path= "/details/:title" component= {Details}/>
          </div>
      </Router> 

      {/* {false && <Customers onUpdateCurrentCustomer={updateCustomer}/>} */}
    </>
  );

}

export default App;
