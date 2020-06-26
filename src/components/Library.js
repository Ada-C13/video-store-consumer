import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Library.css";

const Library = ({ API_URL_BASE, onSelectedMovieCallback }) => {
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
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
  }, []);

  const selectMovie = (movie) => {
    setSelectedMovie(movie);
    onSelectedMovieCallback(movie);
  };

  const restrictText = (str, length) => {
    if (str.length <= length) {
      return str;
    }
    return str.slice(0, length) + "...";
  };

  return (
    <div className="movie-container">
      {movieList.map((movie, i) => (
        <Card className="rental-info" key={i} style={{}}>
          <Card.Img variant="top" src={movie.image_url} alt={movie.title} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{restrictText(movie.overview, 100)}</Card.Text>
            <Button
              className="customer-button"
              onClick={() => selectMovie(movie)}
              variant="primary"
            >
              Select Movie
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
Library.propTypes = {
  API_URL_BASE: PropTypes.string.isRequired,
  onSelectedMovieCallback: PropTypes.func.isRequired,
};

export default Library;
