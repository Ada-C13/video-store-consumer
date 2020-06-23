import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css"

const Movie = (props) => {

  return(
    <div>
      <div className="movie_grid">
        <div className="movie_poster">
          <img src={props.image_url} alt={props.title} />
        </div>
        <div>
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
