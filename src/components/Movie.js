import React , { Component}  from 'react';
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
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {overview}
        </Card.Text>
          <Card.Text>Release Date:{release_date}</Card.Text>
          <div className="">
            <Button
              className=""
              onClick={() => selectMovie(id)}>
              + Checkout
            </Button>
          </div>  
          <div className="button-box">
            <Button
              className="button-box"
              onClick={() => selectMovie(id)}>
              + Library
            </Button>
            <Card.Text>External ID:{external_id}</Card.Text>
          </div>  
      </Card.Body>
    </Card>
  </div>
  )
};

export default Movie;
