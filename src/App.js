import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import axios from 'axios';
import CustomerList from './components/CustomerList'
import MovieLib from './components/MovieLib'
import MovieSearch from './components/MovieSearch'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

// Add to all components 
import * as ReactBootstrap from 'react-bootstrap'


const BASE_URL = 'http://localhost:3000'

class App extends Component {
  constructor() {
    super();

    this.state = {
      customers: [],
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
  }

  selectCustomer(customerId) {
    const { customers } = this.state;
    const selectedCustomer = customers.find((customer) => {
      return customer.id === customerId;
    })
    this.setState({ selectedCustomer })
  }
  
  render() {
   return (
     <head>
       <style>
         body {
          background - image: url("13450.png");
          background-color: #cccccc;
        }
</style>
     </head>
     <body>

     </body>

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
        <MovieLib url="http://localhost:3000/"/>
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


