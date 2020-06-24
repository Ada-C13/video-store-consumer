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
        src="https://i.imgur.com/8VOCN00.png"
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
        src="https://images.unsplash.com/photo-1592780828756-c418d71faa1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Why are you watching TV? Go outside</h3>
        <p>RIDE YOUR BIKE. (P.S. ADIE BIKE CREW IS WHERE IT'S AT)</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
};


export default Home;

