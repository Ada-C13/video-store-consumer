import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import SearchComponent from './components/SearchContainer';
import Customers from './components/Customers';
import Library from './components/Library';
import Details from './components/Details';
import Selected from './components/Selected';


const App = () => {
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [currentMovie, setCurrentMovie] = useState(null);
  
  
  return (
    <>
      <div className="header">
        <h2>Welcome to the Video Store Admin Portal</h2>
      </div>

      <div className="note">
        <Selected customer={currentCustomer} movie={currentMovie}/>
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
            <Route exact path="/library" component={Library}/>
            <Route exact path="/customers" component={Customers} />
            <Route exact path= "/details/:title" component= {Details}/>
          </div>
      </Router> 
    </>
  );

}

export default App;
