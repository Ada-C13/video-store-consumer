import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Library from './components/Library';
import Search from './components/Search';
import Customer from './components/Customer';
import axios from 'axios';

class App extends Component {
  // render() {
  //   return (
    constructor(props) {
      super(props);
  
      this.state = {
        selectedMovie: {},
        selectedCustomer: {},
      }
    }
  
    resetState = () => {
      this.setState({
        selectedMovie: {},
        selectedCustomer: {},
      });
    }
  
    setMovieState = (movie) => {
      this.setState({
        selectedMovie: movie
      })
    };
  
    setCustomerState = (customer) => {
      this.setState({
        selectedCustomer: customer
      })
    }
  
    addRental = () => {
      axios.post(`http://localhost:4000/rentals/${this.state.selectedMovie.title}/check-out`, {
        customer_id: this.state.selectedCustomer.id
      })
      .then(() => {
        this.resetState()
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          error: error.message,
        })
      })
    }

    render() {
      return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search Vidoes</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
            <li>
              <Link to="/customer">Customers</Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1>
            Bootleg Videos
          </h1>
          <Switch>
            <Route path="/customer">
              <Customer onSelectedCustomerCallback={this.setCustomerState} />
            </Route>
            <Route path="/library">
              <Library onSelectedMovieCallback={this.setMovieState} />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/">
              {/* <Home /> */}
            </Route>
          </Switch>
        </main>
        <div className="info-bar">
            <ul className="info-bar">
              {Object.values(this.state.selectedMovie).length !== 0 ? 'Selected Movie:' : null} {this.state.selectedMovie ? this.state.selectedMovie.title : null}
              {Object.values(this.state.selectedCustomer).length !== 0 ? ' | Selected Customer:' : null} {this.state.selectedCustomer ? this.state.selectedCustomer.name : null}
              {Object.values(this.state.selectedMovie).length !== 0 && Object.values(this.state.selectedCustomer).length !== 0 ? <button onClick={this.addRental}>Checkout</button> : null}
            </ul>
        </div>
      </Router>
    );
  }
}

function Home() {
  return <h1>Homepage</h1>;
}


export default App;
