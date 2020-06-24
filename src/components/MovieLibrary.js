import React, { useEffect, useState } from'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/'

const MovieLibrary = ({ movieList, selectMovie }) => {

  // const [ movieList, setMovieList ] = useState([])
  // const [ errorMessage, setErrorMessage ] = useState(null);

  // useEffect( () => {
  //   axios
  //   .get(BASE_URL + 'movies')
  //   .then((response) => {
  //     console.log(response.data)
  //     const newMovieList = response.data;
  //     setMovieList(newMovieList);
  //     setErrorMessage(null);
  //   })
  //   .catch((error) => {
  //     console.log(error.message);
  //     setErrorMessage(error.message);
  //   });
  // }, [])

  const allMovies = movieList.map((movie) => {
		return (
			<div  key={movie.id}>
				<Movie movie={movie} selectMovie={selectMovie} action={"Select Movie"} />
			</div>
		);
	});


  return (
    <div className="container">
      <h3>Movie Library</h3>

      <div className="card-deck d-flex">
        { allMovies }
      </div>
    </div>
  )
}

export default MovieLibrary;