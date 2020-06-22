import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {

  return(
    <div className="cards">
      <div className="card">
      <img src={props.image_url} className="ui medium image" />
        <div className="content">
          <h3>{props.title}</h3>
          <p>{props.overview}</p>
          <button value={props} onClick={() => props.onClickCallback(props.id)} >Select Movie</button> 
        </div>
      </div>
    </div>
  )
};

export default Movie
