import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import PropTypes from "prop-types";

const MovieCard = ({title, external_id, overview, release_date, image_url}) => {

  const [error, setError] = useState(null);


  const selectMovie = (event) => {
    // POST request
    // event.preventDefault();
    // axios.post('http://localhost:3000/movies', {
    //   params: {
    //     external_id: external_id,
    //     title: title,
    //     overview: overview,
    //     release_date: release_date,
    //     image_url: image_url
    //   }
    // })
    // .then((response) => {
    //   const data = response.data;
    //   console.log(`this is response.data ${response.data}`);
    //   console.log(`this is movies list before: ${moviesList}`);
    //   let movieCollection = data.map((movie) => {
    //     return (
    //       <MovieCard
    //       external_id = {movie.external_id}
    //       title = {movie.title}
    //       overview = {movie.overview}
    //       release_date = {movie.release_date}
    //       image_url = {movie.image_url}
    //       />
    //       );
    //     });
    //     setMoviesList(movieCollection);
    //   })
    //   .catch((error) => {
    //     setError(error.response);
    //   });
  };

  return (
      <Card style={{ width: '24rem' }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{overview}</Card.Text>
          <button className="button" onClick={selectMovie}>Select this Movie</button>
        </Card.Body>
      </Card>
    )
  };






MovieCard.propTypes = {
  external_id: PropTypes.number,
  title: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  image_url: PropTypes.string
};

// title, overview, release_date, image_url, external_id

export default MovieCard;