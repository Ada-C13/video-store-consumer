
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Customers from './Customers';
import Library from './Library';
import Search from './Search';

const Header = (props) => {
  URL = "http://localhost:3000/"

  //Customer
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const selectCustomer = (selectedCustomer) => {
    setSelectedCustomer(selectedCustomer);
    return;
  }

  return (
  <Router>
      <div>
        <h2>Welcome to Video Store Customer</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link">Home</Link></li>
          <li><Link to={'/library'} className="nav-link">Library</Link></li>
          <li><Link to={'/customers'} className="nav-link">Customers</Link></li>
          <li><Link to={'/search'} className="nav-link">Search</Link></li>
          <li> {selectedCustomer ? "Selected Customer: "+selectedCustomer.name : "No Customer Selected"} </li>
        </ul>

        </nav>
        <hr />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route 
            path='/library'
            render={(props) => (
              <Library {...props} 
              url={URL+"/movies"}/>
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