import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import axios from 'axios';
import CustomerList from './components/CustomerList'
import MovieLib from './components/MovieLib'
import MovieSearch from './components/MovieSearch'
import Home from './components/Home'
import { Button } from 'react-bootstrap/';

const BASE_URL = 'http://localhost:3000'

class App extends Component {
  constructor() {
    super();

    this.state = {
      // All Customers
      customers: [],
      // All Movies
      movies: [],
      selectedCustomer: undefined,
      selectedMovie: undefined,
    }; 
  }
  
  // Geting Data from API
  componentDidMount() {
    // Geting Customers Data
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
    // Geting Movies Data
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
  // Select Customer Method
  selectCustomer(customerId) {
    console.log(customerId);
    const { customers } = this.state;
    const selectedCustomer = customers.find((customer) => {
      return customer.id === customerId;
    }) 
    this.setState({ selectedCustomer })
  }
  // Select Movies Method
  selectMovie(movieId) {
    console.log(movieId);
    const { movies } = this.state;
    const selectedMovie = movies.find((movie) => {
      return movie.id === movieId;
    })
    this.setState({ selectedMovie })
  }

  //Geting ready for Checkout
  selectedMovieCustomer(){ 
    return ((this.state.selectedCustomer || this.state.selectedMovie) ? "you selected an items" : "You didn't select any items" )
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
      <div>
        <h3>{this.state.selectedMovie ? ("Movie that you Selected: \n\n" + this.state.selectedMovie.title) : "" }</h3>
        <h3>{this.state.selectedCustomer ? ("Customer that you Selected: \n\n" + this.state.selectedCustomer.name) : "" }</h3>
        {(this.state.selectedMovie && this.state.selectedCustomer )? <Button>Create a Rental</Button> : ''}
      </div>
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


