import React , { Component}  from 'react';
import './MovieLib.css';
import PropTypes from 'prop-types';
import Movie from './Movie'
import CardDeck from 'react-bootstrap/CardDeck'

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
    <div className="">
      <CardDeck>
      {buildMovie()}
      </CardDeck>
    </div>
  )
}

export default MovieLib;