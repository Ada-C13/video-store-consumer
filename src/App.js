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
      <Selected customer={currentCustomer} movie={currentMovie}/>
      <Router>
        <nav className="">
          <ul>
            {/* https://medium.com/the-andela-way/understanding-the-fundamentals-of-routing-in-react-b29f806b157e*/}
            <li className=""><Link to="/">Home</Link></li>
            <li className=""><Link to="/search"> Search for Movies</Link></li>
            <li className=""><Link to="/library">Library</Link></li>
            <li className=""><Link to="/customers">Customers</Link></li>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchComponent} />
            <Route exact path="/library" component={Library}/>
            <Route exact path="/customers" component={Customers} />
            <Route exact path= "/details/:title" component= {Details}/>
          </ul> 
        </nav>
      </Router> 
    </>
  );

}

export default App;
