import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from "./Movie";

const API_URL_MOVIES = "http://localhost:3000/movies"

const Library = () => {
  const [movieList, setMovieList] = useState([])
  const [message, setMessage] = useState(null);

  // event.preventDefault();
  useEffect(()=>{
    axios.get(API_URL_MOVIES)
    .then((response) => {
      const apiMovieList = response.data;
      console.log(apiMovieList)
      setMovieList(apiMovieList);
    })
    .catch((error) => {
      setMessage(error.message);
      console.log(message);
    });
  }, []);

  const movieComponents = movieList.map((movie) => {
    return(
      <Movie
        key = {movie.external_id}
        externalId = {movie.external_id}
        title = {movie.title}
        overview = {movie.overview}
        releaseDate = {movie.release_date}
        imageUrl = {movie.image_url}
        showAddButton = {false}
        showDetailButton = {true}
        selectMovieButton = {true}
      />
    )
  })
  console.log(movieComponents)
  return (
    <div>
      {movieComponents}
    </div>
  );
}

export default Library;