import React from 'react';
import "./Home.css";
import movienight from '../backgroundimages/ultimate-movie-weekend.jpg';

const Home = () => {
  return (
    <div>
      <img className="homepage-photo" src={movienight} alt="movie-night"/>
    </div>
  );
}

export default Home;