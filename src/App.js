import React, { useEffect, useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import axios from 'axios'; 
import PropTypes from 'prop-types';
import './App.css';

import Home from './components/Home';
import Search from './components/Search';
import Movies from './components/Movies';
import Customers from './components/Customers';

const App = () => {
  const [ searchResults, setSearchResults ] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState(null);
  
  const [ customerList, setCustomerList ] = useState([]);
  const [ selectedCustomer, setSelectedCustomer ] = useState(null);

  const searchMovies = (search) => {
    axios.get('http://localhost:3000/movies', { params: search })
    .then((response) => {
      setSearchResults(response.data);
    })
    .catch((error) => {
      setErrorMessage(error.response.data.cause);
    });
  };

  const getCustomers = useCallback(() => {
    axios.get('http://localhost:3000/customers')
    .then((response) => {
      setCustomerList(response.data);
    })
    .catch((error) => {
      setErrorMessage(error.response.data.cause);
    });
  }, []);

  useEffect( getCustomers, [ getCustomers ]);

  return (
    <Router>
      <header className="App-header">
        <h1 className="App-title"><a href="/">Video Store Consumer</a></h1>
        
        <nav className="App-nav">
          <div className="App-nav-links">
            <Link to="/" className="App-nav-links__item">Home</Link>
            <Link to="/search" className="App-nav-links__item">Movie Search</Link>
            <Link to="/library" className="App-nav-links__item">Movie Library</Link>
            <Link to="/customers" className="App-nav-links__item">Customer List</Link>
          </div>
            <div className="App-nav-selected">
              <h3>Current Selection</h3>
            {
              selectedCustomer && (
                <span className="App-nav-selected__customer">Customer #{selectedCustomer.id} {selectedCustomer.name}</span>
              )
            }
          </div>
        </nav>
      </header>

      <main className="App-content">
        <Switch>
          <Route path="/search">
            <Search results={searchResults} onSearchMovieCallback={searchMovies} />
          </Route>
          <Route path="/library">
            <Movies />
          </Route>
          <Route path="/customers">
            <Customers list={customerList} onSelectCallback={setSelectedCustomer} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
