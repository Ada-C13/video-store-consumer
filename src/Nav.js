import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav">
      <h1 className="nav-header">Videosky</h1>
      <ul className="nav-links">
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