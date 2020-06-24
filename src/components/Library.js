import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';

const Library = (props) => {
  // const API_MOVIE_URL = "http://localhost:3000/movies"
  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setMessage] = useState(null);
  
  useEffect(()=>{
    axios.get(props.url)
      .then((response) => {
        const movieList = response.data;
        setMovieList(movieList);
      })
      .catch((error) => {
        setMessage(error.message);
        console.log(error.message);
      });
  }, [props.url])

  const movieComponents = movieList.map((movie) => {
    return(
      <Movie
        key = {movie.id}
        id = {movie.id}
        title = {movie.title}
        image_url = {movie.image_url}
        release_date = {movie.release_date}
        overview = {movie.overview}
        external_id = {movie.external_id}
        selectMovieCallback={props.selectMovieCallback}
      />
    )
  })

    return (
      <div className="container-fluid">
        <h2 className="py-2 text-center w-100">All Movies</h2>
        <table class="table table-hover">
          <thead class="thead-light">
            <tr>
              <th>ID</th>
              <th>Select</th>
              <th>Title</th>
              <th>Image</th>
              <th>Release Date</th>
              <th>Overview</th>
              <th>External_id</th>
            </tr>
          </thead>
          <tbody>
            {movieComponents}
          </tbody>
        </table>
      </div>
  );
}



export default Library;