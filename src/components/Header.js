
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="navbar-brand float-left">
          <a href="/"><img className="w-75" src="https://lh3.googleusercontent.com/DVogurPnvt3I4TyoyhNW7ZjhSMnyJGRlbVfaDE7UjkpbLNP40YQeRRlKDi8FWkMDSx2p00lRfcS0AZTqv6EEDn48nrJKKjW-Cvl9lCgO8v7UvKsgFO2JFHz3oHuusK3FzYlvUHnUnJYZxtkGKxVwlgorDA2IJza2Drq0wB-8q9Ob4B9w34WXFnx2ScbHrbnK5LzswTxT20lLBMMrHARzbZfO-e4AOcRln_w1LaYD7WW4JX_L5RfFhLG6OEHQ7MgT1hjQyLGY5ORcohhisLqRsJ79pJ-hAA-nNjS_A2VFkj3XnES_BX2nbA1rdZi1fMmzm4Lfz375p98bvdUrtoHZP8RWQPPAU42uRg9bc7Tl-IG6PzfhkHsOy6s2ebub8oD_Oa3zTYHmsCz0jrH4IJY42Gd9_Y-JN-7WJ7XOpt_eNvk2WJSh1zW1p1sxOXP0GzWBuRDwlMzHfRDq8-B3nFfAcP4QLF8vJfZAcxZwlO1I_HZKwYu6F_k4psIiZKXOXhyjWfUl_CUQWK_fBqeVM4nODb5Uq-OQckEoDhcveMpu33ddBdtzeBznb9pQ6eZenWHBcGplAPSX9Xx1Jaq7UooDtmW2tcE2kyl0_w0Z1mj1hrnsjk3JEc0lszc2HpXze-41yIBdZxzw9__DjFc95-L5Ani9jz0_7tcnwEGKy1enR7MxANc1wiB7kMRQW6XB4w=w400-h137-no?authuser=0"/></a>
          </div>
          <ul className="navbar-nav mr-auto float-left">
            <li><Link to={'/'} className="nav-link">Home</Link></li>
            <li><Link to={'/library'} className="nav-link">Library</Link></li>
            <li><Link to={'/customers'} className="nav-link">Customers</Link></li>
            <li><Link to={'/search'} className="nav-link">Search</Link></li>
          </ul>
          <div className="w-25"></div>
          <div className="selected w-75 d-flex justify-content-end">
            <ul className="list-group list-group-horizontal text-center">
              <li className={ selectedCustomer ? "list-group-item active" : "list-group-item text-muted"}>{selectedCustomer ? selectedCustomer.name : "No Customer Selected"} </li>
              <li className={ selectedMovie ? "list-group-item active" : "list-group-item text-muted"}> {selectedMovie ? selectedMovie.title : "No Movie Selected"} </li>
              <button className={ selectedCustomer && selectedMovie ? "btn btn-success text-decoration-none" : "invisible" } onClick="" path="/">Checkout</button>
            </ul>
          </div>

        </nav>
        
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