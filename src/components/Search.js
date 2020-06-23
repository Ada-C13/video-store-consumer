import React, {useState} from 'react';
import axios from "axios";

const Search = () => {

  const [query, setQuery] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(null);

  const search = (event) => {
    event.preventDefault();

    axios.get('http://localhost:3000/movies', {
      params: {
        query: query
      }
    })
    .then((response) => {
      setMoviesList(response.data);
    })
    .catch((error) => {
      setError(error.response);
    });
  };

  // const movies = moviesList.map(movie =>
  //   make <Movie /> components, add those to the return of the Search component
  // );

  return (
  <form className='form' onSubmit={search}>
    <label className='label' htmlFor="query">Movie Name</label>
    <input className='input' type='text' name='query' placeholder='Enter a Movie' value={query} onChange={ (event) => setQuery(event.target.value) }/>
    <button className='button' type='submit'>Search </button>
  </form>
  // render some movie cards
  // each card should also have a button to add it to the rental store database
  );
  // Here we will also return some movie cards and that will be great
};

export default Search;
