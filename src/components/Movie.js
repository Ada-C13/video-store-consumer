import React from 'react';

const Movie = (props) => {
  return (
    <div>
      <li>
        <strong>{props.title}</strong>
      </li>
      <p>{props.overview}</p>
    </div>
  );
};

export default Movie;
