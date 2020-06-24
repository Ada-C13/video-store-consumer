import React, { useState, useEffect } from 'react';
import AppHeader from "./components/AppHeader";
import Customers from "./components/Customers";
import Library from "./components/Library";
import Search from "./components/Search";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

const API_URL_BASE = "http://localhost:3000";

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [moviesList, setMoviesList] = useState([]);
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [currentMovies, setCurrentMovies] = useState(null);


  // const Movies = () => {
  //   useEffect(() => {
  //     axios.get(API_URL_BASE + "/movies").then((response) => {
  //       // Load in the data
  //       const moviesList = response.data;
  //       setResult(moviesList);
  //     });
  //   }).catch((error) => {
  //     // Show an error
  //     setError("There was an error with this request!");
  //   }),
  //     [];
  // };

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
              <li>
                <Link to="/movies">Library</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/customers" render={(props) => (
              <Customers {...props} API_URL_BASE={API_URL_BASE}/>
            )}>

            </Route>
            <Route path="/movies" render={(props) => (
              <Library {...props} API_URL_BASE={API_URL_BASE}/>
            )}>

            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
