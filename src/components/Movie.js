import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({movie}) => {
  return (
    <div className="card w-25">
      <img className="card-img-top" src={movie.image_url} alt={movie.title} />
      <div className="card-body">
        <h4 className="card-title"> {movie.title} </h4>
        <p className="card-text"> Released on {movie.release_date} </p>
        <p className="card-text"> {movie.overview} </p>
        <a href="#!" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;

