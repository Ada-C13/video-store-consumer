
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Customers from './Customers';
import Library from './Library';
import Search from './Search';

const Header = (props) => {
  URL = "http://localhost:3000/"

  //Customer
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  
  const selectCustomer = (selectedCustomer) => {
    setSelectedCustomer(selectedCustomer);
    return;
  }

  //Movie
  const [selectedMovie, setSelectedMovie] = useState(null);

  const selectMovie = (selectedMovie) => {
    setSelectedMovie(selectedMovie);
    return;
  }

  return (
  <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
          <h2 className="">Videos</h2>

          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link">Home</Link></li>
            <li><Link to={'/library'} className="nav-link">Library</Link></li>
            <li><Link to={'/customers'} className="nav-link">Customers</Link></li>
            <li><Link to={'/search'} className="nav-link">Search</Link></li>
          </ul>

          <div className="selected w-75 d-flex justify-content-end">
            <ul className="list-group list-group-horizontal text-center">
              <li className={ selectedCustomer ? "list-group-item active" : "list-group-item text-muted"}>{selectedCustomer ? selectedCustomer.name : "No Customer Selected"} </li>
              <li className={ selectedMovie ? "list-group-item active" : "list-group-item text-muted"}> {selectedMovie ? selectedMovie.title : "No Movie Selected"} </li>
              <button className={ selectedCustomer && selectedMovie ? "btn btn-success text-decoration-none" : "invisible" } onClick="" path="/">Checkout</button>
            </ul>
          </div>

        </nav>
        <hr />
        <Switch> 
            <Route exact path='/' component={Home} />
            <Route 
            path='/library'
            render={(props) => (
              <Library {...props} 
              url={URL+"/movies"}
              selectMovieCallback={selectMovie}/>
            )} />
            <Route 
            path='/customers'
            render={(props) => (
              <Customers {...props} 
              url={URL+"/customers"}
              selectCustomerCallback={selectCustomer}
              />
            )} />
            
            
            <Route path='/search' component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default Header;