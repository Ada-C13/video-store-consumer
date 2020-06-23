import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import axios from 'axios';
import CustomerList from './components/CustomerList'
import MovieLib from './components/MovieLib'
import MovieSearch from './components/MovieSearch'
import Home from './components/Home'

const BASE_URL = 'http://localhost:3000'

class App extends Component {
  constructor() {
    super();

    this.state = {
      customers: [],
      movies: [],
    }
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/customers`)
    .then((response) => {
      const customers = response.data;
      this.setState({ 
        customers,
        error: undefined
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });

    axios.get(`${BASE_URL}/movies`)
    .then((response) => {
      const movies = response.data;
      this.setState({ 
        movies,
        error: undefined
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  selectCustomer(customerId) {
    const { customers } = this.state;
    const selectedCustomer = customers.find((customer) => {
      return customer.id === customerId;
    })
    this.setState({ selectedCustomer })
  }

  selectMovie(movieId) {
    const { movies } = this.state;
    const selectedMovie = movies.find((movie) => {
      return mov.id === movieId;
    })
    this.setState({ selectedMovie })
  }
  
  render() {
   return (
     <Router>
      <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/search">Search for Movie</Link>
          </li>
          <li>
            <Link to="/library">Library</Link>
          </li>
          <li>
            <Link to="/customers">Customer List</Link>
          </li>
        </ul>
      </header>
    
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/search">
        <MovieSearch/>
      </Route> 
      <Route path="/library">
        <MovieLib movieList={this.state.movies} 
        selectMovie={(id) => this.selectMovie(id)} />
      </Route>
      <Route path="/customers">
        <CustomerList 
        customerList={this.state.customers} 
        selectCustomer={(id) => this.selectCustomer(id)} />
      </Route> 
      </Switch>
      </div>
     </Router>
    );
  }
}

export default App;


