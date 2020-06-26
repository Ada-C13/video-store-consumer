import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import './MovieList.css';
const BASE_URL = 'https://moviestar13.herokuapp.com/movies/';
const axios = require('axios');

const MovieList = (props) => {

  const [movies,setMovies] = useState([]);

  // CALL RUBY RAILS API 
  useEffect(() => {

    axios.get(BASE_URL)

      .then((response) => {
        setMovies(response.data);
      });

  }, []);


  const generateMovies = movies.map((movie)=> {
      return <Movie key={movie.id} movie={movie} onClickCallBack= {props.setSelectedMovieCallBack}/>
    })


  return <div className="MovieList">
    <h3>Movie List:</h3>
    {generateMovies}
  </div>


};


MovieList.propTypes = {
  setSelectedMovieCallBack: PropTypes.func.isRequired,
};


export default MovieList;
