import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

import Navbar from "./components/Navbar";
import Library from "./components/Library";
import Search from "./components/Search";
import Home from "./components/Home";
import Customers from "./components/Customers";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const LIBRARY_URL = "http://localhost:3000/library"

const App = () => {

  const [library, setLibrary] = useState();

  useEffect(() => {
    axios.get(LIBRARY_URL)
      .then((response) => {
        const apiLibrary = response.data;
        setLibrary(apiLibrary);
      })
      .catch((error) => {
        // Error Handling, huh?
        console.log(error);
      });
  }, []);
  
  return (
    <Router>
      <div> 
        <header>
          <Navbar />
        </header>

        <Switch>
          <Route path="/library">
            <Library library={library} />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;
