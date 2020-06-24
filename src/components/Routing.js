import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from '../App';
import Store from './Store';
import Library from './Library';
import Users from './Library';
import './Routing.css';
import Result from './Result';

const Routing = (
  <Router>
    <div>
      <ul className="nav-bar">
        <li class="active">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store">Seach</Link>
        </li>
        <li>
          <Link to="/library">Library</Link>
        </li>
        <li>
          <Link to="/user">Users</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/store" 
        render={(props) => (
          <Store {...props} url={"http://localhost:3000/"} />
        )}/>
      <Route path="/results/:searchTerm"
        render={(props) => (
          <Result {...props} url={"http://localhost:3000/"} />
        )} />
      <Route path="/library/:movie"
        render={(props) => (
          <Result {...props} url={"http://localhost:3000/"} />
        )} />
      <Route path="/library"
        render={(props) => (
          <Library {...props} url={"http://localhost:3000/"} />
        )}/>
      <Route path="/library"  
        render={(props) => (
          <Users {...props} url={"http://localhost:3000/"} />
        )}/>
    </div>
  </Router>
)

export default Routing;