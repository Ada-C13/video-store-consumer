import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


const Movie = (props) => {

  const onMovieClick =() => {
    props.onClickCallBack(props.movie);
    console.log(props.movie);
  }

  // display movie details 

  return <button className="Movie-name-button" onClick = {onMovieClick}>
    {props.movie.title}
  </button>
  
}

Movie.propTypes = {
  onClickCallBack: PropTypes.func.isRequired,
  movie: PropTypes.object
};

export default Movie