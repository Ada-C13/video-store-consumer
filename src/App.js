import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import CustomerIndex from './components/CustomerIndex';
import MovieIndex from './components/MovieIndex';

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
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/movies">Movie List</Link></li>
                <li><Link to="/customers">Customers</Link></li>
                <li>
                </li>
              </ul>
            </nav>

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
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;