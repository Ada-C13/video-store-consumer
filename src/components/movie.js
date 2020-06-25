import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
  const { movie, selectMovieCallback } = props;

  const { id, title, overview, releaseDate, imageUrl, externalId } = movie;

  return (
    <div className="card movie-card">
        {id} - {title} - {releaseDate}
        <button
          className="btn btn-primary select-movie"
          onClick={() => { selectMovieCallback(movie) }}
        >
          Select
        </button>
        {imageUrl}
        <p>{overview}</p>
        {externalId}

    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  selectMovieCallback: PropTypes.func.isRequired
}

export default Movie;