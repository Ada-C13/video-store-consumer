import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import PropTypes from "prop-types";
import axios from "axios";

const SearchMovieCard = ({title, external_id, overview, release_date, image_url}) => {
  
  const [error, setError] = useState(null);
  // state for inDatabase => default false

  const addMovie = (event) => {
    // POST request
    event.preventDefault();
    axios.post('http://localhost:3000/movies',
      {
        external_id: external_id,
        title: title,
        overview: overview,
        release_date: release_date,
        image_url: image_url
      }
    )
    .then((response) => {
      const data = response.data;
      // console.log(`this is :movie ${:movie}`)
      // let movieCollection = data.map((movie) => {
      //   return (
        
      //     );
      //   });
      //   setMoviesList(movieCollection);  
      })
      .catch((error) => {
        setError(error.response);
      });
  };

  return (
      <Card style={{ width: '24rem' }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{overview}</Card.Text>
          <Button variant="dark" onClick={addMovie}>Add this Movie</Button>
        </Card.Body>
      </Card>
    )
  };

SearchMovieCard.propTypes = {
  external_id: PropTypes.number,
  title: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  image_url: PropTypes.string,
};

// title, overview, release_date, image_url, external_id

export default SearchMovieCard;