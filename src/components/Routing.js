import React, { useState } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Store from './Store';
import Library from './Library';
import Users from './Users';
import './Routing.css';
import Result from './Result';


const Routing = (props) =>{

  return (
  <Router>
    <div>
      <ul className="nav-bar">
        {/* <li class="active">
          <Link to="/">Home</Link>
        </li> */}
        <li class="active">
          <Link to="/store">Seach</Link>
        </li>
        <li>
          <Link to="/library">Library</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          {/* <p>Selected User : {selectedUser.name}</p> */}
        </li>
      </ul>
      {/* <Route exact path="/" component={Home} /> */}
      <Route path="/store"
        render={(renderProps) => (
          <Store {...props}  {...renderProps} url={"http://localhost:3000/"} />
        )} />
      <Route path="/results/:searchTerm"
          render={(renderProps) => (
          <Result {...props} {...renderProps} url={"http://localhost:3000/"} />
        )} />
      <Route path="/library/:movie"
          render={(renderProps) => (
          <Result {...props} url={"http://localhost:3000/"} />
        )} />
      <Route path="/library"
          render={(renderProps) => (
            <Library {...props} {...renderProps} url={"http://localhost:3000/"} />
        )} />
      <Route path="/users"
          render={(renderProps) => (
            <Users {...props} {...renderProps} url={"http://localhost:3000/"}/>
        )} />

    </div>
  </Router>
  )
}

export default Routing;