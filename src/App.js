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
import ErrorCard from './components/ErrorCard';

const LIBRARY_URL = "http://localhost:3000/libraryyy"

const App = () => {

  const [library, setLibrary] = useState();
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(LIBRARY_URL)
      .then((response) => {
        const apiLibrary = response.data;
        setLibrary(apiLibrary);
        setErrorMessage(null);
      })
      .catch((error) => {
        setErrorMessage(error.message);
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
          <Route exact path="/" />
          <Route path="/home" />
          <Route path="/">
            {errorMessage && <ErrorCard message={errorMessage} />}
          </Route>
        </Switch>

        <Switch>
          <Route path="/library">
            <Library library={library}/>
          </Route>
          <Route path="/search">
            <Search library={library}/>
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
