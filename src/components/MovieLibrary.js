import React, { useEffect, useState } from'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

import axios from 'axios';

const BASE_URL = 'http://localhost:3000/'

const MovieLibrary = () => {
  const [ movieList, setMovieList ] = useState([])
  const [ errorMessage, setErrorMessage ] = useState(null);

  useEffect( () => {
    axios
    .get(BASE_URL + 'movies')
    .then((response) => {
      console.log(response.data)
      const newMovieList = response.data;
      setMovieList(newMovieList);
      setErrorMessage(null);
    })
    .catch((error) => {
      console.log(error.message);
      setErrorMessage(error.message);
    });

  }, [])



  const allMovies = movieList.map((movie) => {
		return (
			<div key={movie.id}>
				<Movie movie={movie} />
			</div>
		);
	});


  return (
    <>
      <h3>Movie Library</h3>
      { allMovies }
    </>
  )
}

export default MovieLibrary;