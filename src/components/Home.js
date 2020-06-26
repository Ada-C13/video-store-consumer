import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"

const Home = () => {
  return (
    <div className="homepage">
      <nav>
        <div class="homepage-links">
          <p class="homepage-link">
            <Link to='/'>HOME</Link>
          </p>
          <p class="homepage-link">
            <Link to='/Library'>LIBRARY</Link>
          </p>
          <p class="homepage-link">
            <Link to='/Customers'>CUSTOMERS</Link>
          </p>
          <p class="homepage-link">
            <Link to='/Search'>SEARCH</Link>
          </p>
        </div>
      </nav>
    </div>
  );
}

export default Home;