import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Button } from 'react-bootstrap/';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

const Movie = ({ id, title, overview, release_date, image_url, external_id, selectMovie }) => {
  return (
  <div className="">
      <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
          <Card.Title><div className="h4-movie-card">{title}</div></Card.Title>
        <Card.Text>
          {overview}
        </Card.Text>
          <Card.Text><strong>Release Date </strong>{release_date}</Card.Text>
          <Card.Text><strong>External ID </strong>{external_id}</Card.Text>
          <div className="button-box-container">
            <Button variant="dark"
              className="button-box button-grad button-grad:hover"
              onClick={() => selectMovie(id)}>
              + Checkout
            </Button>
            <Button variant="dark"
              className="button-box right-button button-grad button-grad:hover"
              onClick={() => selectMovie(id)}>
              + Library
            </Button>
          </div>  
      </Card.Body>
    </Card>
  </div>
  )
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  image_url: PropTypes.string,
  external_id: PropTypes.number,
  selectMovie: PropTypes.func.isRequired,
};

export default Movie;
