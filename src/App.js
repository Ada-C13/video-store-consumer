import React, { Component, useState , useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Movies from './components/Movies';
import Rentals from './components/Rentals';
import Customers from './components/Customers';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {/* https://www.golangprograms.com/how-to-create-simple-react-router-to-navigate-multiple-pages.html */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search"> Search for Movies</Link></li>
          <li><Link to="/library">Rentals</Link></li>
          <li><Link to="/customers">Customers</Link></li>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Movies} />
          <Route exact path="/library" component={Rentals} />
          <Route exact path="/customers" component={Customers} />
        </ul> 
      </div>
    </Router> 
    );
  }
}

export default App;
