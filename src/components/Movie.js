import React from 'react';
import './Search.css';

const Movie = (props) => {
  const onButtonClick = () => {
    props.setSelectedMovieCallBack(props);
  };
  
  return (
    <div>
      <div className="movie-details">
        <p className="movie-title">{props.title}</p>
        <p className="movie-overview">{props.overview}</p>
        <img src={props.image_url} alt="movie-image"/>
        <p className= "movie-inventory">{props.inventory}</p>
      </div>
      <button className="movie-button" onClick={onButtonClick}>
        Select Movie
      </button>
    </div>
  );
};

export default Movie;
