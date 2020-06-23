import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Library = () => {
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
  console.log(library);

  return (
    <div className='Lists-container'>
      Movie Library
      <ul>
        {library.map((movie) => {
          return (
            <li>
              {movie.title}
              {movie.overview} 
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Library;
