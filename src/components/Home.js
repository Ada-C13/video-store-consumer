import React, { useState, Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "./Home.css"


const Home = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/veInojw.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Welcome to Rentflix</h3>
        <p>Good luck renting from here.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/jiUGTnw.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Netflix, who?</h3>
        <p>Watch out, next Forbes 100 company in the making.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/NFB7QdS.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Why are you watching TV? Go outside</h3>
        <p>RIDE YOUR BIKE. (P.S. ADIE BIKE CREW IS WHERE IT'S AT)</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/hLrJyPz.jpg"
        alt="Fourth slide"
      />

      <Carousel.Caption>
        <h3>Seriously, get out of the house.</h3>
        <p>You'll feel better!</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
};


export default Home;

