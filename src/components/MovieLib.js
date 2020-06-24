import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie'
import './MovieLib.css'

const MovieLib = ({ movieList, selectMovie, detailsCallback, detailsMovie }) => {
  
  const makeMovies = () => movieList.map((movie, i) => {
    return <Movie
      key={i}
      { ...movie }
      selectMovie={() => selectMovie(movie.external_id)}
      inLibrary="true"
      detailsCallback={() => detailsCallback(movie.external_id) }
      detailsMovie={detailsMovie}
      />
  });
  
  return (
    <div>
    <div>
    <h3>Search for a Movie:</h3>
      <div>
        <input
        />
      </div>
      <div className="submit-padding"><button type="submit">Search</button> 
      </div>
   
    </div>
      <div className="container">
      <div className="row">
        {makeMovies()}
      </div>
      </div>
    </div>
  )
}

MovieLib.propTypes = {
  movieList: PropTypes.array.isRequired,
  selectMovie: PropTypes.func.isRequired,
  detailsCallback: PropTypes.func.isRequired,
  detailsMovie: PropTypes.object,
}

export default MovieLib;