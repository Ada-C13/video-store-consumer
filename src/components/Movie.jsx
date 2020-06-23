import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {


  return(
    <div className="cards">
      <div className="card">
        <img src={props.image_url} alt={props.title} />
        <div className="content">
          <h3>{props.title}</h3>
          <p>{props.overview}</p>
          <button className="square" key={props.id} onClick={() => {props.selectMovieCallback(props.id)}} >
            Select Movie
          </button>
        </div>
      </div>
    </div>
  )
};

export default Movie
