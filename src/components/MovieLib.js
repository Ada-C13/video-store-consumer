import React, { useState,  useEffect } from 'react';
import './MovieLib.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie'


const MovieLib = (props) => {
  const API_MOVIE_URL = `${props.url}/movies`
  const [movieList, setMovieList] = useState([])
  const [message, setMessage] = useState(null);

  useEffect(()=>{
    axios.get(API_MOVIE_URL)
      .then((response) => {
        const movieList = response.data;
        setMovieList(movieList);
      })
      .catch((error) => {
        setMessage(error.message);
        console.log(error.message);
      });
  }, [API_MOVIE_URL])
 
      
  const movieComponents = movieList.map((movie) => {
    return(
      <Movie
        key = {movie.id}
        id = {movie.id}
        title = {movie.title}
        overview = {movie.overview}
        release_date = {movie.release_date}
        image_url = {movie.image_url}
        external_id = {movie.external_id}
      />
    )
  })
  return (
    <div>
      {movieComponents}
    </div>
  );

 
}

export default MovieLib;