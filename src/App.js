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
      success: undefined,
      error: undefined
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
    const selectedCustomer = this.state.customers.find((customer) => {
      return customer.id === customerId;
    }) ;
    this.setState({ selectedCustomer });
  };
  // Select Movies Method
  selectMovie(movieId) {
    console.log(movieId);
    const selectedMovie = this.state.movies.find((movie) => {
      return movie.id === movieId;
    });
    this.setState({ selectedMovie });
  };

  makeRental(){
    console.log(this.state.selectedMovie)
    if(this.state.selectedMovie){
      const title = this.state.selectedMovie.title
      const custoId = this.state.selectedCustomer.id

      // let dueDate = new Date()
      let checkoutDate = new Date()
      let dueDate = new Date() 
      dueDate.setDate(checkoutDate.getDate() + 5);
      
      const params = {
        customer_id: custoId,
        due_date: dueDate,
        checkout_date: checkoutDate,
      };
      // After i Check out one of the movie i have to setup both selectedmethods to undefined,
      axios.post(`${BASE_URL}/rentals/${title}/check-out`, params)
      .then(() => {
        this.setState({
          selectedMovie: undefined,
          selectedCustomer: undefined,
          success: "You Successfully created a Rental",
        });
      })
      .catch((error) => {
        this.setState({ 
          error: `An error occurred: ${error.message}`,
        });
      });
    };
  };
  
  setSucces(){
    this.setState({
      success: undefined,
      error: undefined
    });
  };

  addMovie = (addedMovie) => {
    if (!this.state.movies.find(movie => movie.external_id === addedMovie.external_id)) {
      axios.post(`${BASE_URL}/movies`, addedMovie)
      .then((response) => {
        this.setState({
          // movies,
          success: "Movie successfully added to your rental library",
        });
      })
      .catch((error) => {
        this.setState({ 
          error: error.message,
        });
      });
    } else { 
      this.setState({
        error: "Movie already exists in library", 
      });
    };
  };

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
          <li>
          <Button onClick={() => this.setSucces()}>Reset</Button>
          </li>
        </ul>
      <div>
        <h3>{this.state.selectedMovie ? ("Movie that you Selected: \n\n" + this.state.selectedMovie.title) : "" }</h3>
        <h3>{this.state.selectedCustomer ? ("Customer that you Selected: \n\n" + this.state.selectedCustomer.name) : "" }</h3>
        {(this.state.selectedMovie && this.state.selectedCustomer )? <Button onClick={() => this.makeRental()}>Rent Now</Button> : ''}
        <h3>{this.state.success ? (this.state.success) : "" }</h3>
        <h3>{this.state.error ? (this.state.error) : "" }</h3>
      </div>
      </header>
    
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/search">
      <MovieSearch url={BASE_URL} selectMovie={(movie) => this.addMovie(movie)} />
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


