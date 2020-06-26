import React, { useState } from 'react';
import axios from "axios";
import MovieCard from "./MovieCard";
import './MovieSearch.css';
import PropTypes from 'prop-types';



const MovieSearch = (props) => {
  const URL = "http://localhost:3000/movies?query=";


 const END_POINT = 'movies?query=';

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setErrorMessage] = useState([]);


  const searchMovies = (e) => {
    e.preventDefault();

    axios.get(`${URL}${query}`)
    .then((response)=> {
      console.log(response.data);
      setMovies(response.data);
    }).catch((error) => {
      setErrorMessage(error);
      console.log(error);
    })
    
  }
  return (
    <div>
       <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">Search Movies:</label>
        <input className="input" type="text" name="query" placeholder="Movie Title" value={query} onChange={ (e) => setQuery(e.target.value)} /> 
        <button className="button" type="submit">Search </button>
       </form> 
      <div className="card-list"> 
        { movies.map(movie => (
            <MovieCard movie={movie} key={movie.external_id} showAddToLibrary addMovieCallback={props.addMovieCallback}/>
        ))}
     </div>
    </div>
  );
    
}

MovieSearch.propTypes = {
  url: PropTypes.string, 
  addMovieCallback: PropTypes.func,
}

export default MovieSearch;