// import React, { Component } from "react";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

// import logo from "./logo.svg";

import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Library from "./components/Library";
import Customers from "./components/Customers";

const mockCustomer = [
  {
    id: 1,
    name: "Shelley Rocha",
    registered_at: "2015-04-29T14:54:14.000Z",
    address: "Ap #292-5216 Ipsum Rd.",
    city: "Hillsboro",
    state: "OR",
    postal_code: "24309",
    phone: "(322) 510-8695",
    account_credit: 13.15,
    movies_checked_out_count: 0,
  },
  {
    id: 2,
    name: "Curran Stout",
    registered_at: "2014-04-17T04:40:20.000Z",
    address: "Ap #658-1540 Erat Rd.",
    city: "San Francisco",
    state: "California",
    postal_code: "94267",
    phone: "(908) 949-6758",
    account_credit: 35.66,
    movies_checked_out_count: 0,
  },
  {
    id: 3,
    name: "Roanna Robinson",
    registered_at: "2014-11-28T21:14:08.000Z",
    address: "Ap #561-4214 Eget St.",
    city: "Harrisburg",
    state: "PA",
    postal_code: "15867",
    phone: "(323) 336-1841",
    account_credit: 50.39,
    movies_checked_out_count: 0,
  },
  {
    id: 4,
    name: "Carolyn Chandler",
    registered_at: "2014-07-04T18:05:11.000Z",
    address: "133-8707 Arcu. Avenue",
    city: "Fort Wayne",
    state: "IN",
    postal_code: "73684",
    phone: "(234) 837-2886",
    account_credit: 21.79,
    movies_checked_out_count: 0,
  },
];

const mockMovies = [
  {
    id: 1,
    title: "Psycho",
    overview:
      "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.",
    release_date: "1960-06-22",
    image_url:
      "https://image.tmdb.org/t/p/w185/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg",
    external_id: 539,
  },
  {
    id: 2,
    title: "Jaws",
    overview:
      "When an insatiable great white shark terrorizes the townspeople of Amity Island, the police chief, an oceanographer and a grizzled shark hunter seek to destroy the blood-thirsty beast.",
    release_date: "1975-06-18",
    image_url:
      "https://image.tmdb.org/t/p/w185/s2xcqSFfT6F7ZXHxowjxfG0yisT.jpg",
    external_id: 578,
  },
  {
    id: 3,
    title: "The Exorcist",
    overview:
      "12-year-old Regan MacNeil begins to adapt an explicit new personality as strange events befall the local area of Georgetown. Her mother becomes torn between science and superstition in a desperate bid to save her daughter, and ultimately turns to her last hope: Father Damien Karras, a troubled priest who is struggling with his own faith.",
    release_date: "1973-05-31",
    image_url:
      "https://image.tmdb.org/t/p/w185/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg",
    external_id: 9552,
  },
  {
    id: 4,
    title: "North by Northwest",
    overview:
      "Advertising man Roger Thornhill is mistaken for a spy, triggering a deadly cross-country chase.",
    release_date: "1959-07-08",
    image_url:
      "https://image.tmdb.org/t/p/w185/i3g0KIoXYx5RvyVaraYx9n2LCli.jpg",
    external_id: 213,
  },
];

// App component
const App = () => {
  console.log(`App, will initialize`);
  // Declare and initialize state
  const [selectedMovie, setMovie] = useState(0);
  const [selectedCustomer, setCustomer] = useState(0);

  // Callback function to select movie
  const onMovieSelectCallback = (id) => {
    console.log(`App, onMovieSelectCallback`, id);
    // change state
    setMovie(id);
  };

  // Callback function to select customer
  const onCustomerSelectCallback = (id) => {
    console.log(`App, onCustomerSelectCallback`, id);
    // change state
    setCustomer(id);
  };

  const drawNav = () => {
    console.log(`App, draw navigation`);
    return (
      <nav>
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/search">
            <li>Search</li>
          </Link>
          <Link to="/library">
            <li>Library</li>
          </Link>
          <Link to="/customers">
            <li>Customers</li>
          </Link>
        </ul>
      </nav>
    );
  };

  const drawSelected = () => {
    console.log(`App, draw selected`);
    return (
      <div>
        <ul className="selected">
          <li>Selected movie: {selectedMovie}</li>
          <li>Selected customer: {selectedCustomer}</li>
        </ul>
      </div>
    );
  };

  return (
    <Router>
      <div className="AppRoute">
        {drawNav()}
        {drawSelected()}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/search"
            render={(props) => (
              <Search
                {...props}
                onMovieSelectCallback={onMovieSelectCallback}
              />
            )}
          />
          <Route
            path="/library"
            render={(props) => (
              <Library
                {...props}
                onMovieSelectCallback={onMovieSelectCallback}
                movieList={mockMovies}
              />
            )}
          />
          <Route
            path="/customers"
            render={(props) => (
              <Customers
                {...props}
                onCustomerSelectCallback={onCustomerSelectCallback}
                customerList={mockCustomer}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
