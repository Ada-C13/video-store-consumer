
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import Search from './Search';

const reformatData = (data) => {
  return data.map((element) => {
    return element;
  });
};

const Store = (props) => {
  const [movie, setMovie] = useState([]);
  const onSubmitCallback = (movie) => {
    axios.get(`${props.url}movies/${movie}`) 
    .then ((response) => {
    setMovie(response)
    
    })

    .catch((error) => {
      console.log(`Error: ${error}`)
    });
  }

  // The useState function returns an array which contains 
  // two items: movieList and SetMovieList.
  // The movieList is the variable which will store our value and SetMovieList
  // is an updater function which will be responsible to update the movieList.
  const [movieList, setMovieList] = useState([]);
  const endPoint = `${props.url}movies`
  console.log(endPoint)

  const getMovies = (url) => {

    axios.get(url)
      .then((response) => {
        console.log(response.data)
        const apiMovie = reformatData(response.data);
        setMovieList(apiMovie);
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
  useEffect(() => { getMovies(endPoint); }, [endPoint]);

  const formatMovies = movie.map((movie) => {
    return (
      <Movie
        key={movie.id}
        id={movie.id}
        title={movie.title}
        overview={movie.overview}
        image_url={movie.image_url}
        release_date={movie.release_date}
      />
    );
  });

  return (
    <main>
      <div><Search 
        onSubmitCallback={onSubmitCallback}/>
      </div>
      <div className="store">
        {formatMovies}
      </div>
    </main>
  );
}

export default Store;