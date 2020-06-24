import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie'
import CustomerSearch from './CustomerSearch'
import './MovieLib.css'

const BASE_URL = 'http://localhost:3000'

const MovieLib = ({ movieList, selectMovie, selectCustomer, detailsCallback, detailsMovie }) => {
  
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
    <CustomerSearch
      url={BASE_URL} 
      selectCustomer={(id) => selectCustomer(id)}
      detailsCallback={(id) => detailsCallback(id) }
      />
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