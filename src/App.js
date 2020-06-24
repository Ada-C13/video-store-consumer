import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import CustomerList from './components/CustomerList';
import MovieSearch from './components/MovieSearch';
import MovieLibrary from './components/MovieLibrary';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const BASE_URL = 'http://localhost:3000/'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectMovie: undefined,
      customers: [],
      selectedCustomer: undefined,
      error: undefined,
    };
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
    .catch ((error) => {
      this.setState({ 
        error: error.message 
      });
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
      this.setState({ 
        error: error.message 
      });
    });
  }

  selectMovie = (movieId) => {
    const { movies } = this.state;

    const selectedMovie = movies.find((movie) => {
      return movie.id === movieId;
    })

    this.setState({ selectedMovie, })
  }
  
  selectCustomer(id) {
    const { customers } = this.state;

    const selectedCustomer = customers[id - 1]

    this.setState({
      selectedCustomer,
    })
  }
  createRental() {
    if(this.state.selectedMovie) {
      const movieTitle = this.state.selectedMovie.title
      const customerId = this.state.selectedCustomer.id
      let dueDate = new Date()
      dueDate.setDate(new Date().getDate() + 1);

      const params = {
        customer_id: customerId,
        due_date: dueDate.toISOString(), 
      }

      axios.post(`${BASE_URL}/rentals/${movieTitle}/check-out`, params)
      .then((response) => {

        this.setState({
          selectedMovie: undefined,
          selectedCustomer: undefined,
          error: undefined,
        })
      })
      .catch((error) => {

        this.setState({ error: error.message });

      });
    }
  }
  render() {
    return (
      <Router>
      <div className="App">
        <div className="sidenav">
          <ul>
          {this.state.selectedMovie ? <li>Selected Movie:{this.state.selectedMovie.title}</li> : "" }
          {this.state.selectedCustomer ? <li>Selected Customer:{this.state.selectedCustomer.name}</li> : "" }
          {this.state.selectedMovie ? <li><button onClick={() => this.createRental()}>Create a Rental</button>  </li> : ''}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/library">Movie Library</Link>
            </li>
            <li>
              <Link to="/search">Movie Search</Link>
            </li>
          </ul>
        </div>
        <div className="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/customers">
              <CustomerList customerList={this.state.customers} selectCustomer={(id) => this.selectCustomer(id)} />
            </Route>
            <Route path="/library">
              <MovieLibrary movieList={this.state.movies} selectMovie={(id) => this.selectMovie(id)}/>
            </Route>
            <Route path="/search">
              <MovieSearch />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
