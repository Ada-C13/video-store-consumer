import React from 'react';

const Movie = (props) => {
  const onButtonClick = () => {
    props.setSelectedMovieCallBack(props.id);
  };
  
  return (
    <div>
      <li>
        <strong>{props.title}</strong>
      </li>
      <p>{props.overview}</p>
      <button className='Movie' onClick={onButtonClick}>
        Select Movie
      </button>
    </div>
  );
};

export default Movie;
