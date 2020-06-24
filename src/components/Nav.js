import React, { Component } from 'react';
import {Link} from 'react-router-dom'


    const navStyle ={
      color: 'white'
    }

class Nav extends Component {
  render () {
    return (
      <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
        <Link style={navStyle} to="/customers"><li>CustomerList</li></Link>
        <Link style={navStyle} to="/Library"><li>Library</li></Link>
        <Link style={navStyle} to="/Search"><li>SearchBar</li></Link>
        <Link style={navStyle} to="/Rentals"><li>Rentals</li></Link>
        
        </ul>
        </nav>
    );
  }
};
export default Nav;