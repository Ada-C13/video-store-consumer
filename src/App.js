import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import CustomerList from './components/CustomerList'
import MovieLib from './components/MovieLib'
import MovieSearch from './components/MovieSearch'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link path="/">Home</Link>
            </li>
            <li>
              <Link path="/search">Search for Movie</Link>
            </li>
            <li>
              <Link path="/library">Library</Link>
            </li>
            <li>
              <Link path="/customers">Customer List</Link>
            </li>
          </ul>
        </header>
     
        <Switch>
        <Route path="/" component={Home}/>
        <Route path="/search" component={MovieSearch}/>
        <Route path="/library" component={MovieLib}/>
        <Route path="/customers" component={CustomerList} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


