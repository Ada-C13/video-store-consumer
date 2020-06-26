import React from 'react';
import './MovieCard.css'
import PropTypes from 'prop-types';

export default function MovieCard(props) {

  
  return (
  <div className="movie-card">
    <img className="movie-card--image" src={`${props.movie.image_url}`} alt={props.movie.title}/>
    <div className="class-content"> 
      <h2 className='card--title'> {props.movie.title} </h2>
      <p className="subtitle"><small>RELEASE DATE: {props.movie.release_date}</small></p>
      <p className="description"> Overview: {props.movie.overview}</p>
    </div>
    {props.showAddToLibrary && <button className="add-movie-button"onClick={() => props.addMovieCallback(props.movie)}> Add to Library </button>} 
    {props.showSelectMovie && <button className="add-movie-button" onClick={() => props.currentMovieCallback(props.movie)}> Select Movie </button>}
  </div>
  );
}


MovieCard.propTypes = {
  movie: PropTypes.object,
  showAddToLibrary: PropTypes.bool,
  addMovieCallback: PropTypes.func,
  currentMovieCallback: PropTypes.func

}

