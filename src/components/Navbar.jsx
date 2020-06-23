import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { withRouter } from 'react-router-dom';




const Navbar = (props) => {
  return (
    <div className="">
      <Router>
        <ul>
          <li>
            <NavLink to="/" >Home</NavLink>
          </li>
          <li>
            <NavLink to="/library">Rental Library</NavLink>
          </li>
          <li>
            <NavLink to="/customers">Customers</NavLink >
          </li>
        </ul>
      </Router>
    </div>
  )
}

export default Navbar;