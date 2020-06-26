import React, { Component , useState } from 'react';
import MovieList from './components/MovieList';
import CustomerList from './components/CustomerList';
import Search from './components/Search';
import Checkout from './components/Checkout';
import Return from './components/Return';
import moment from 'moment';
import './App.css';
import charvic from "./images/char_vic_v2.jpg";

import WithFlash from './components/WithFlash';

import {MdLocalMovies,MdMovieFilter} from "react-icons/md";
import { RiStarSmileLine } from "react-icons/ri";

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchDetail from './components/SearchDetail';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: {},
      selectedCustomer: {},
      displayMessage: null,
    };
  }

  setSelectedMovie(movie){
    this.setState({selectedMovie:movie})
  }

  setSelectedCustomer(customer){
    this.setState({selectedCustomer:customer})
  }

  onClearSelection() {
    this.setState({selectedMovie:{}})  
    this.setState({selectedCustomer:{}})
  }

  setDisplayMessage(displayMessage) {
    console.log("in setDisplayMessage\n"+displayMessage);
    this.setState({displayMessage:displayMessage})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Star Rentals</h1>
        </header>
    
        <Router>
          <nav>
            <ul>
              <li className="App-nav-link-container">
                <Link className="App-nav-link" to="/">Home</Link>
              </li>
              <li className="App-nav-link-container">
                <Link className="App-nav-link"  to="/library">Library</Link>
              </li>
              <li className="App-nav-link-container">
                <Link className="App-nav-link"  to="/search">Search</Link>
              </li>
              <li className="App-nav-link-container">
                <Link className="App-nav-link"  to="/customers">Customers</Link>
              </li>
            </ul>
          </nav>

          < WithFlash displayMessage={this.state.displayMessage} />

          <div className="CheckoutReturn">
            <Checkout movie = {this.state.selectedMovie.title} customer = {this.state.selectedCustomer} setDisplayMessage={this.setDisplayMessage.bind(this)} />
            <Return movie = {this.state.selectedMovie.title} customer = {this.state.selectedCustomer} setDisplayMessage={this.setDisplayMessage.bind(this)}/>
            <button className="MainButton" onClick = {this.onClearSelection.bind(this)}>Clear Movie/Customer</button>
            <p className = "ShowSelected">  <MdLocalMovies />  Movie: {this.state.selectedMovie.title}</p>
            <p className = "ShowSelected"> <RiStarSmileLine/> Customer: {this.state.selectedCustomer.name}</p>
          </div>

          
          <Switch>

          <Route exact path="/">
            <div className="logo">
              <img src={charvic} alt="girl in red and purple sunglasses"></img>
            </div>
          </Route>

            <Route path="/library">
              <MovieList setSelectedMovieCallBack = {this.setSelectedMovie.bind(this)} />
            </Route>

            <Route path="/search">
              <Search setDisplayMessage={this.setDisplayMessage.bind(this)}/>
            </Route>


            <Route path="/customers">
            <CustomerList setSelectedCustomerCallBack = {this.setSelectedCustomer.bind(this)} />
            </Route>
          </Switch>

        </Router>

        <div className = "App-selections">
          
          <div className = "App-selected">
            <SearchDetail movie={this.state.selectedMovie}/>
          </div>
       
          {this.state.selectedCustomer.name && (
          <div className="App-selected-customer-container App-selected ">
            <h3 className="App-customer-detail-title">Customer Details:</h3>
            <p><span className="App-customer-detail">Name:</span> {this.state.selectedCustomer.name},  <span className="App-customer-detail">Registered At: </span> {moment(this.state.selectedCustomer.registered_at).format('LL') }</p>

            <ul>
              <li className="App-list-style"><span className="App-customer-detail">Address: </span> {this.state.selectedCustomer.address}</li>
              <li className="App-list-style"><span className="App-customer-detail">City: </span> {this.state.selectedCustomer.city}</li>
              <li className="App-list-style"><span className="App-customer-detail">State: </span> {this.state.selectedCustomer.state}</li>
              <li className="App-list-style"><span className="App-customer-detail">Postal Code: </span> {this.state.selectedCustomer.postal_code}</li>
              <li className="App-list-style"><span className="App-customer-detail">Phone: </span>Phone: {this.state.selectedCustomer.phone}</li>
              <li className="App-list-style"><span className="App-customer-detail">Account Credit: </span> {this.state.selectedCustomer.account_credit}</li>
              <li className="App-list-style"><span className="App-customer-detail">Movies Checked Out: </span> {this.state.selectedCustomer.movies_checked_out_count}</li>
            </ul>
          </div>) }
      
        </div>
     
       
      </div>
    );
  }
};



export default App;
