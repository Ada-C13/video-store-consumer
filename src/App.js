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
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Movie Search</Link>
          </li>
          <li>
            <Link to="/library">Movie Library</Link>
          </li>
          <li>
            <Link to="/customers">Customer List</Link>
          </li>
        </ul>
        
        {
          selectedCustomer && (
            <ul>
              <li>Selected Customer: #{selectedCustomer.id} {selectedCustomer.name}</li>
            </ul>
          )
        }

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
      </div>
    </Router>
  );
}

export default App;
