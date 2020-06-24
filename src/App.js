import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import axios from "axios";

import Home from './components/Home';
import SearchComponent from './components/SearchContainer';
import Customers from './components/Customers';
import Library from './components/Library';
import Details from './components/Details';


const App = () => {

  return (
  <Router>
    <div className="App">
      <ul>
        {/* https://medium.com/the-andela-way/understanding-the-fundamentals-of-routing-in-react-b29f806b157e*/}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search"> Search for Movies</Link></li>
        <li><Link to="/library">Library</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchComponent} />
        <Route exact path="/library" component={Library}/>
        <Route exact path="/customers" component={Customers} />
        <Route exact path= "/details/:title" component= {Details}/>
      </ul> 
    </div>
  </Router> 
  );

}

export default App;
