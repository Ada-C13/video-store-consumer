import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from '../App';
import Store from './Store';
import Library from './Library';
import Users from './Users';
import './Routing.css';
import Result from './Result';

let selectedUser = "Not selected";

const onSubmitUserCallback = (user) => {
  selectedUser = user
}

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
          <Link to="/users">Users</Link>
        </li>
        <li>
          <p>Selected User : {selectedUser}</p>
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
      <Route path="/users"  
        render={(props) => (
          <Users {...props} url={"http://localhost:3000/"}  onSubmitUserCallback={onSubmitUserCallback(selectedUser)}/>
        )}/>
    </div>
  </Router>
)

export default Routing;