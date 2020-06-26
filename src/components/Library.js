import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';

const Library = (props) => {
  const [library, setLibrary] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/movies')
      .then((response) => {
        const allMovies = response.data;

        setLibrary(allMovies);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const moviesList = library.map((movie) => {
    return (
      <Movie
        key={movie.id}
        id={movie.id}
        title={movie.title}
        overview={movie.overview}
        release_date={movie.release_date}
        image_url={movie.image_url}
        external_id={movie.external_id}
        setSelectedMovieCallBack={props.setSelectedMovieCallBack}
      />
    );
  });

  return (
    <div>
      <h1>List of Movies</h1>
      <div className="movies-list">
        {moviesList}
      </div>
    </div>
  );
};
export default Library;
