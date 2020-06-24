
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
          <a href="/"><img className="w-75" src="https://lh3.googleusercontent.com/pw/ACtC-3emDsynMN5vJmfTvCqR6lWWxeBiBAPLymsKLn8sOq-t8zAQPwLo_f_2YITgWrq_BDWr-h43ohiIUkLm77quCDkSqNMsGsnNlm6AITEUYQeJ7I3Lha95sLe5tDNw9aBQNMAZwr70RbiNI0_LD2XNrpmn=w400-h137-no?authuser=0"/></a>
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