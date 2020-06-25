import React, { useState } from 'react';
import './App.css';
import Home from "./components/Home";
import Library from './components/Library';
import CustomersList from './components/CustomersList';
import Search from './components/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {

  const [selectedCustomer, setSelectedCustomer] = useState({
    name: '',
    id: null,
  });

  const [selectedMovie, setSelectedMovie] = useState({
    name: '',
    id: null,
  });

  
  const updateSelectedCustomer = (newSelected) => {
    setSelectedCustomer({
      name: newSelected.name,
      id: newSelected.id
    });
    // setAlert(`You selected ${newSelected.name}. Nice.`)
  };

  const updateSelectedMovie = (newSelected) => {
    setSelectedMovie({
      name: newSelected.name,
      id: newSelected.id
    });
    // setAlert(`You selected ${newSelected.name}. Nice.`)
  };

  return (
    <Router>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
        integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
        crossorigin="anonymous"></link>
      </head>
        
      <nav className="navbar navbar-expand-lg navbar-dark px-5">
        <a className="navbar-brand text-uppercase" href="/">Rentflix</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/search">Search <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/library">Library <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/customers">Customers <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Selected Movie: {selectedMovie.name} <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Selected Customer: {selectedCustomer.name} <span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/customers">
          <CustomersList 
            onUpdateSelectedCustomer={updateSelectedCustomer} 
            selectedCustomer={selectedCustomer.id} 
          />
        </Route>
        <Route path="/library">
          <Library 
            onUpdateSelectedMovie={updateSelectedMovie} 
            selectedMovie={selectedMovie.id}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>
  );
 }



export default App;
