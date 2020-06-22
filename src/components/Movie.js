import React from 'react';

const Movie = (props) => {
  return (
    <div id={props.id} className="movie">
      <div className="movie__content">
        <p className="movie__content-text">{props.title} </p>
        <p className="movie__content-text">{props.overview} </p>
        <p className="movie__content-text">{props.release_date} </p>
        <img
          src={props.image_url}
          alt="new"
        />
      </div>
    </div>
  )
}

export default Movie;