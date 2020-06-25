import React, { Component } from 'react';
import {Link} from 'react-router-dom'


    const navStyle ={
      color: 'white'
    }

class Nav extends Component {
  render () {
    const style = {
      margin: 0,
      top: 0,
      right: 60,
   bottom:20,
      left: 'auto',
      position: 'fixed',
  };
return(

      <nav style={style}>
        <div className="our-story-header">
        <ul className="nav-links">
        <Link style={navStyle} to="/customers"><li className="authLinks redButton">CustomerList</li></Link>
        <Link style={navStyle} to="/Library"><li className="authLinks redButton">Library</li></Link>
        <Link style={navStyle} to="/Search"><li className="authLinks redButton">SearchBar</li></Link>
        <Link style={navStyle} to="/Rentals"><li className="authLinks redButton">Rentals</li></Link>
        
        </ul>
        </div>
        </nav>
    );
  }
};
export default Nav;