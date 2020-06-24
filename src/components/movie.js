import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
  const { id, title, overview, releaseDate, imageUrl, externalId, selectMovieCallback } = props;

  return (
    <div className="card movie-card">
        {id} - {title} - {releaseDate}
        <button
          className="btn btn-primary select-movie"
          onClick={() => { selectMovieCallback(id) }}
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
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  overview: PropTypes.string,
  imageUrl: PropTypes.string,
  externalId: PropTypes.number,
  selectMovieCallback: PropTypes.func
}

export default Movie;