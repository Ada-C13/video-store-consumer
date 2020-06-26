import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from "./Movie";

const Details = (props) => {
  const { title } = props.match.params
  const [message, setMessage] = useState(null);
  const [movie, setMovie] = useState(null)
  
  const API_URL_MOVIES = `http://localhost:3000/movies/${title}`
  useEffect(()=>{
    axios.get(API_URL_MOVIES)
    .then((response) => {
      const retrievedMovie = response.data
      setMovie(retrievedMovie)
    })
    .catch((error) => {
      setMessage(error.message);
    });
  }, [API_URL_MOVIES]);

  if (!movie) {
    return (
      <div></div>
    )
  } else {
    const movieComponent = 
      <Movie
        key = {movie.external_id}
        externalId = {movie.external_id}
        title = {movie.title}
        overview = {movie.overview}
        releaseDate = {movie.release_date}
        imageUrl = {movie.image_url}
        showAddButton = {false}
        showDetailButton = {false}
      />
    return (
      <div>
        {movieComponent}
        {message}
      </div>
    );
  }
}
export default Details;