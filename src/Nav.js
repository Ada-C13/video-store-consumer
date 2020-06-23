import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
  <div>
    <h3>Videosky</h3>
    <ul>
      <li><Link to="/">Home</Link></li>
      <Link to="/library"><li>Library</li></Link>
      <Link to="/customer"><li>Customer</li></Link>
      <Link to="/search"><li>Search</li></Link>
    </ul>
  </div>
);
}

export default Nav;