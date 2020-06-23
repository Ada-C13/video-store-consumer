import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <h3>Videosky</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/library">Library</Link>
        </li>
        <li>
          <Link to="/customers">Customer</Link>
        </li>
        <li>
        <Link to="/search">Search</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;