import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap/';
import './Movie.css';

const Movie = ({movie, selectMovie, action}) => {

  const onMovieClick = () => {
    selectMovie(movie.id, movie.title, movie.overview, movie.release_date, movie.image_url, movie.external_id);
  }

  return (
    // <Card classNameName="movie-card">
    //   <div>
    //     <div classNameName="movie-card-body">
    //       <img classNameName="movie-card-image" src={movie.image_url} alt={movie.title} />
    //       <h4 classNameName="movie-card-title"> {movie.title} </h4>
    //       <div>          
    //         <div classNameName="movie-card-release-date"> Released on {movie.release_date} </div>
    //         <div classNameName="movie-card-description"> {movie.overview} </div>
    //       </div>  
    //       <button
    //       type="button"
    //       classNameName="movie-card-button"
    //       onClick={onMovieClick}>
    //         {action}
    //       </button>
    //     </div>
    //   </div>
    // </Card>

    <div className="movie-entry align-center">
      <div className="py-2">
          <div className="row">
            <div className="col-lg-6 mb-3 mb-lg-0">
              <div className="hover hover-2 text-white rounded">
                <img className="movie-card-image" src={movie.image_url} alt={movie.title} />
                <div className="hover-overlay"></div>
                <div className="hover-2-content px-5 py-4">
                  <h3 className="hover-2-title text-uppercase font-weight-bold mb-0 font-light"> {movie.title} <p className="font-weight-light text-muted">{movie.release_date}</p></h3>
                  <p className="hover-2-description text-uppercase mb-0"> <small> {movie.overview} </small> </p>
                </div>
              </div>
            </div>

          </div>
      </div>
      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={onMovieClick}>
          {action}
      </button>

    </div>
  )
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  // title: PropTypes.string.isRequired,
  // release_date: PropTypes.string.isRequired,
  // overview: PropTypes.string.isRequired,
  // image_url: PropTypes.string,
  // id: PropTypes.number,
};

export default Movie;

