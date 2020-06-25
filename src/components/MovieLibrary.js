import React, { useEffect, useState } from'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/'

const MovieLibrary = ({ movieList, selectMovie }) => {
  const allMovies = movieList.map((movie) => {
		return (
			<div  key={movie.id}>
				<Movie movie={movie} selectMovie={selectMovie} action={"Select Movie"} />
			</div>
		);
	});

  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-center align-items-center">
        <img className="popcorn-header w-25" src="https://images.unsplash.com/photo-1587132129911-80e544e7e7b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1006&q=80" alt="popcorn as icon" />
        <h3>. . . Movie Library</h3>
      </div>

      <div className="card-deck d-flex flex-column justify-content-center align-items-center">
        { allMovies }
      </div>
    </div>
  )
}

export default MovieLibrary;