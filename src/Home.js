import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="Home">

      <h1 className="home-header">What would you like to do?</h1>
      
      <ul className="home-links">
        <li>
          <button><Link to="/library">See Movie Library</Link></button>
        </li>
        <li>
          <button><Link to="/customers">View All Customers</Link></button>
        </li>
        <li>
        <button><Link to="/search">Search for a Movie</Link></button>
        </li>
      </ul>
      
    </div>
  );
}

export default Home;