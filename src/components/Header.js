
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Customers from './Customers';
import Library from './Library';
import Search from './Search';

const Header = () => {
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
        </ul>
        </nav>
        <hr />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/library' component={Library} />
            <Route path='/customers' component={Customers} />
            <Route path='/search' component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default Header;