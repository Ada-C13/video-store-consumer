import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import movienight from '../backgroundimages/ultimate-movie-weekend.jpg';

const Home = () => {
  return (
    <div className="homepage">
      <div>
        <img className="homepage-photo" src={movienight} alt="movie-night"/>
      </div>
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