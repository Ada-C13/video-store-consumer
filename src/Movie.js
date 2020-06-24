import React from 'react';

const Movie = (props) => {

  return (
    <div>
      <h3>{props.title}</h3>
      <img src={props.image_url} alt="movie poster"/>
    </div>
  )
}

export default Movie;