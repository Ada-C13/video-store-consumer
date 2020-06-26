import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import PropTypes from "prop-types";
import axios from "axios";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";

const Home = ({ API_URL_BASE }) => {
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(API_URL_BASE + "/movies")
      .then((response) => {
        // Load in the data
        setMovieList(response.data);
      })
      .catch((error) => {
        // Show an error
        setError(error.message);
      });
  }, [API_URL_BASE]);

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-300"
          src="https://images.unsplash.com/photo-1585647347384-2593bc35786b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          alt="popcorn"
        />
        <Carousel.Caption>
          <h3>Popcorn</h3>
          <p>Courtsey of upsplash.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-180"
          src="https://images.unsplash.com/photo-1555904113-beeced6051b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          alt="Cinema"
        />
        <Carousel.Caption>
          <h3>Cinema</h3>
          <p>Courtsey of upsplash.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-180"
          src="https://images.unsplash.com/photo-1554522329-33b20a360135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          alt="DreamGirls"
        />

        <Carousel.Caption>
          <h3>Dream Girls</h3>
          <p>Courtsey of upsplash</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

Home.propTypes = {
  API_URL_BASE: PropTypes.string.isRequired,
};

export default Home;
