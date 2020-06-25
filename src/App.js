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
import {
  Button, Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Row
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCustomer: undefined,
      selectedMovie: undefined,
      open: false,
      message: '',
    }
  }



  render() {

    return (
      <div className="App">
        <Router>
          <div>
          <Navbar color="light" light expand="md">
          <Nav className="ml-auto" navbar>
          <NavItem>
                 <NavbarBrand href="/">Home</NavbarBrand>
                 </NavItem>
                <NavItem>
                <NavbarBrand href="/movies">Movie List</NavbarBrand>
                </NavItem>
                <NavItem>
                <NavbarBrand href="/customers">Customers</NavbarBrand>
              </NavItem>
              <NavItem>
                <NavbarBrand href="/search">Search</NavbarBrand>
              </NavItem>
              <NavItem>
                <NavbarBrand href="/rental">Add a New Movie</NavbarBrand>
              </NavItem>
              </Nav>
              </Navbar>

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

                />
              </Route>
              <Route path="/rental">
                <Rental

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