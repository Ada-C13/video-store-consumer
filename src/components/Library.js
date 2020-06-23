import React, {useState} from 'react';
import axios from "axios";
import MovieCard from './MovieCard';

const Library = () => {
  const [error, setError] = useState(null);
  const [libraryList, setLibraryList] = useState(null);

  axios.get('http://localhost:3000/movies')
    .then((response) => {
      const data = response.data;
      console.log(`this is response.data ${response.data}`);
      let movieCollection = data.map((movie) => {
        return (
          <MovieCard
          external_id = {movie.external_id}
          title = {movie.title}
          overview = {movie.overview}
          release_date = {movie.release_date}
          image_url = {movie.image_url}
          key = {movie.external_id}
          />
        );
      });
      setLibraryList(movieCollection);
    })
    .catch((error) => {
      setError(error.response);
    });

    return (
      <div>{libraryList}</div>
    );
};



export default Library;