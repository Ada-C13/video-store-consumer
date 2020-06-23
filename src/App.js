import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Customers from "./components/Customers";
import Movies from "./components/Movies";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="AppRoute">
          {Nav()}
          <Switch>
            {" "}
            # Switch: stops after we get the url, doesn’t go to the next url
            <Route path="/customers" component={Customers} />
            <Route path="/movies" component={Movies} />
            <Route path="/" exact component={Home} /> # exact: makes sure we
            don’t render "/" followed by something else
          </Switch>
        </div>
      </Router>
    );
  }
}

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/movies">
          <li>Movies</li>
        </Link>
        <Link to="/customers">
          <li>Customers</li>
        </Link>
      </ul>
    </nav>
  );
}

export default App;
