import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from "./Movie";
import "./Library.css"

const API_URL_MOVIES = "http://localhost:3000/movies"

const Library = () => {
  const [movieList, setMovieList] = useState([])
  const [message, setMessage] = useState(null);

  // event.preventDefault();
  useEffect(()=>{
    axios.get(API_URL_MOVIES)
    .then((response) => {
      const apiMovieList = response.data;
      setMovieList(apiMovieList);
    })
    .catch((error) => {
      setMessage(error.message);
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
  });

  return (
    <div className="move-list">
      {/* found this sorting code here:https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/ */}
      {movieComponents.sort((a, b) => (a.props.title > b.props.title) ? 1 : (a.props.title === b.props.title) ? ((a.props.externalId > b.props.externalId) ? 1 : -1) : -1 )}
    </div>
  );
}

export default Library;