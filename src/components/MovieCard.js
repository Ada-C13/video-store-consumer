import React from 'react';
import Card from 'react-bootstrap/Card'
import PropTypes from "prop-types";

const MovieCard = ({id, title, external_id, overview, image_url, onUpdateSelect}) => {

  const onSelect = () => {
    const newSelected = {
      id: id,
      name: title,
    }
    onUpdateSelect(newSelected)
  }

  return (
      <Card style={{ width: '24rem' }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{overview}</Card.Text>
          <button className="button" onClick={onSelect}>Select this Movie</button>
        </Card.Body>
      </Card>
    )
  };

MovieCard.propTypes = {
  external_id: PropTypes.number,
  title: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  image_url: PropTypes.string,
  onUpdateSelect: PropTypes.func
};


export default MovieCard;