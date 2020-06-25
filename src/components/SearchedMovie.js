import './Movie.css';
import React from 'react';
import { Button } from 'react-bootstrap/';
import PropTypes from 'prop-types';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

const SearchedMovie = ({ id, title, overview, release_date, image_url, external_id, selectMovie}) => {
  return (
  // <div className="">
  //   <div className="">
  //     <h3> {title} </h3>
  //     <ul>
  //       <li>Overview: {overview} </li>
  //       <li>Release Date: {release_date} </li>
  //       <li><img src={image_url} alt={title}/></li>
  //       <li>External id: {external_id} </li>
  //     </ul>
  //   </div>
  //   <div className="">
  //     <Button
  //      onClick = {() => selectMovie(id, title, overview, release_date, image_url, external_id)}>
  //        Add Movie to Library
  //     </Button> 
  //   </div>  
  // </div>
    <div className="">
      <Card style={{ width: '19rem' }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title><div className="h4-api-card">{title}</div></Card.Title>
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
              Add to Library
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
};

SearchedMovie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  external_id: PropTypes.number.isRequired,
  selectMovie: PropTypes.func.isRequired,
};
export default SearchedMovie;