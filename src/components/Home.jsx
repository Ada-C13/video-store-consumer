import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-header">
      <div className="home-header__text-box">
        <h1 className="heading-primary">
            <span className="heading-primary--main">Video Store</span>
            <span className="heading-primary--sub">may the force of React be with you</span>
        </h1>
      </div>
    </div>
  )
}

export default Home;