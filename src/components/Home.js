import React from "react";
// import PropTypes from "prop-types";
import Image from 'react-bootstrap/Image'

import "./Home.css";

// Home Component
const Home = (props) => {
  console.log(`rendering Home...`, props);
  return (
    <div className="container">
      <h1>Welcome!</h1>
      <Image src="https://i.imgur.com/Q6KB8ty.png" alt="illustration" fluid></Image>
    </div>
  
  );
};

// Home.propTypes = {};

export default Home;