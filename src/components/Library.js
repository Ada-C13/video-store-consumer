import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';

const reformatData = (data) => {
  console.log(data)
  return data.map((element) => {
    return element;
  });
};

const Library = (props) => {

  const [movieList, setMovieList] = useState([]);
  const endPoint = `${props.url}movies`

  const getMovies = (url) => {

    axios.get(url)
      .then((response) => {
        const apiMovieList = reformatData(response.data);
        setMovieList(apiMovieList);
      })
      .catch((error) => {
        console.log(error)
      });
  };

  // By using this Hook, you tell React that your component needs to do something 
  // after render.
  // useEffect takes a function(getMovies) which can contain any kind of operation including side effects
  // Also takes a second argument as an array [], 
  // in this array you can pass variables. When any of this variable updates it will cause the useEffect to run again
  useEffect(() => { getMovies(endPoint);}, [endPoint]);

  const formatMovies = movieList.map((movie) => {
    return (
    <Movie
      key = {movie.id}
      id = {movie.id}
      title = {movie.title}
      overview = {movie.overview}
      release_date = {movie.release_date}
      inventory={movie.inventory}
      // onSelectMovie={onSelectMovie(movie)}
    />
    );
  });

  return ( 
  <main>
    <div className = "store" > {
      formatMovies
    } </div> 
  </main>
  );
}

export default Library;