
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import Search from './Search';


const Store = (props) => {

  const [movie, setMovie] = useState([]);
  const endPoint = `${props.url}movies`

  const onSubmitCallback = (movie) => {
    axios.get(`${props.url}movies/${movie}`)
      .then((response) => {
        console.log(response.data)
        setMovie(response.data)

      })
      .catch((error) => {
        console.log(`Error: ${error}`)
      });
  }

  // By using this Hook, you tell React that your component needs to do something 
  // after render.
  // useEffect takes a function(getMovies) which can contain any kind of operation including side effects
  // Also takes a second argument as an array [], 
  // in this array you can pass variables. When any of this variable updates it will cause the useEffect to run again
  useEffect(() => { onSubmitCallback(endPoint); }, [endPoint, movie]);

  const formatMovies = (() => {
    return (
      <Movie
        key={movie.id}
        id={movie.id}
        title={movie.title}
        overview={movie.overview}
        release_date={movie.release_date}
        available_inventory={movie.available_inventory}
        inventory={movie.inventory}
      />
    );
  });

  return (
    <main>
      <div><Search
        onSubmitCallback={onSubmitCallback} />
      </div>
      <div className="store">
        {formatMovies(movie)}
      </div>
    </main>
  );
}

export default Store;