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
const CUSTOMERS_URL = "http://localhost:3000/customers"


const App = () => {

  const [library, setLibrary] = useState();
  const [customers, setCustomers] = useState();
  const [moviePick, setMoviePick] = useState();

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

  useEffect(() => {
    axios.get(CUSTOMERS_URL)
      .then((response) => {
        const apiCustomers = response.data;
        setCustomers(apiCustomers);
      })
      .catch((error) => {
        // Error Handling, huh?
        console.log(error);
      });
  }, []);

  // I don't really understand this part
  const onSelectMovie = (movie_id) => {
    axios.get(LIBRARY_URL) 
      .then((response)=>{
      let count = 1
      const movieList = response.data.map((movie) => {
        movie["id"] = count
        count += 1
        return movie
      })
  
    const selectedMovie = movieList.find((movie) => {
      return movie.id === movie_id;
    });

    if (selectedMovie) {
      setMoviePick(selectedMovie);
      console.log(moviePick); 
    };
  });
  }

  return (
    <Router>
      <div> 
        <header>
          <Navbar />
        </header>

        <Switch>
          <Route path="/library"> 
            <Library library={library} selectMovieCallback={onSelectMovie}/>
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/customers">
            <Customers customers={customers} />
          </Route>
          <Route path="/">
            <Home moviePick={moviePick}/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;
