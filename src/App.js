// elvis operator ?. safe nav operator, if thing on left evals to null, it does not // render.....whole experssion is null, otherwise, it continues to eval stuff to right

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import CustomerIndex from './components/customerindex';
import MovieIndex from './components/movieindex';
import MovieSearch from './components/moviesearch';
import Rental from './components/rental'
import CurrentlyCheckedOut from './components/currentlycheckedout'
import {
  Button, Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  Nav,
  Navbar, 
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Row,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCustomer: undefined,
      selectedMovie: undefined,
      open: false,
      message: '',
      isOpen: false
    }
  }

  selectCustomer = (customer) => {
    this.setState({ selectedCustomer: customer });
    console.log(customer)
  }

  selectMovie = (movie) => {
    this.setState({ selectedMovie: movie });
    console.log(movie)
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          OG.Blockbuster
        </div>
        <Router>
          <div className="nav">
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/movies">Movie List</Link></li>
                <li><Link to="/customers">Customers</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/rentals/currentlycheckedout">CurrentlyCheckedOut</Link></li>
                <li><Link to="/rentals/:title/check-out">Rentals to Cart</Link></li>
              </ul>
            </nav>
            <p>
              {this.state.selectedCustomer?.name}
              {this.state.selectedMovie?.title}
            </p>
          </div>
          <div>
            <Switch>
              <Route path="/customers">
                <CustomerIndex
                  selectCustomerCallback={this.selectCustomer}
                />
              </Route>
              <Route path="/movies">
                <MovieIndex
                  selectMovieCallback={this.selectMovie}
                />
              </Route>
              <Route path="/search">
                <MovieSearch
                  selectMovieCallback={this.selectMovie}  
                />
              </Route>
              <Route path="/rentals/currentlycheckedout">
                <CurrentlyCheckedOut

                />
              </Route>
              <Route path="/rentals/:title/check-out">
                <Rental
                  selectedCustomer={this.state.selectedCustomer}
                  selectedMovie={this.state.selectedMovie}
                />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;