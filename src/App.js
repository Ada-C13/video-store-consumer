import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import SearchComponent from './components/SearchContainer';
import Customers from './components/Customers';
import Library from './components/Library';
import Details from './components/Details';
import Movie from './components/Movie';
import Selected from './components/Selected';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// http://localhost:3000/rentals/{title}/check-out 
const App = () => {
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [currentMovie, setCurrentMovie] = useState(null);

  const updateMovie = (selectedMovie) => {
    setCurrentMovie(selectedMovie)
  }
  
  return (
    <>
      <div className="header">
        <h2>Welcome to the Video Store Admin Portal</h2>
      </div>

      <div className="note">
        <p>Selected Customer: {currentCustomer}</p>
        <p>Selected Movie: {currentMovie}</p>
        <Button variant="outline-secondary" >Check-out</Button>
        <Button variant="outline-secondary">Return</Button>
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
            <Route exact path="/customers" component={Customers} />
            <Route exact path= "/details/:title" component= {Details}/>
          </div>
      </Router> 

      {/* {false && <Customers onUpdateCurrentCustomer={updateCustomer}/>} */}
    </>
  );

}

export default App;
