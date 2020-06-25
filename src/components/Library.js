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
        console.log(errorMessage);
        
        setTimeout(() => {
          setMessage(null);
        }, 5000);
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
      <div className="w-100 d-flex text-center flex-wrap justify-content-around">
        <h2 className="text-center w-100 pt-3 pb-3">Rental Library</h2>
        <table class="table table-hover">
          <thead class="thead-light text-center">
            <tr>
              <th>ID</th>
              <th>Select</th>
              <th>Title</th>
              <th>Image</th>
              <th>Release Date</th>
              <th>Overview</th>
              <th>Ext. ID</th>
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