import React , { Component}  from 'react';
import './MovieLib.css';
import PropTypes from 'prop-types';
import Movie from './Movie'

const MovieLib = ({ movieList, selectMovie }) => {
  const buildMovie = () => {
    const movie = movieList.map((movie) => {
      return <Movie
        key={movie.id}
        { ...movie }
        selectMovie={(id) => selectMovie(id)}
      />
    });
    return movie;
  }

  return (
    <div>
      <h1>Movie Information</h1>
      {buildMovie()}
    </div>
  )
}

export default MovieLib;