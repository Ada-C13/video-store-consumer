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
        <div className="movie_details_container">
          {/* <h3>{props.title}</h3> */}
          <p>{props.overview}</p>

          <button class="ui olive button" onClick={() => { props.movieCallback(props.id) } }>
            Rent {props.title}
          </button>
        </div>
      </div>
    </div>
  )
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image_url: PropTypes.string,
  overview: PropTypes.string,
  movieCallback: PropTypes.func.isRequired,
}

export default Movie
