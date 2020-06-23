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
          <td>
            <button class="ui olive button" onClick={() => { props.movieCallback(props.id) } }>
              Rent {props.title}
            </button>
          </td>
        </div>
      </div>
    </div>
  )
};

export default Movie
