import React from 'react';
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
  };

  return (
    <div>
      <CardDeck>
      {buildMovie()}
      </CardDeck>
    </div>
  );
};

MovieLib.propTypes = {
  movieList: PropTypes.array.isRequired,
  selectMovie: PropTypes.func.isRequired,
}

export default MovieLib;