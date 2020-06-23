import React, {useState} from 'react';
import axios from "axios";

URL = "http://localhost:5000/movies"

const Search = () => {

  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState('');

  const search = (event) => {
    event.preventDefault();

    axios.get('http://localhost:5000/movies')
    .then((response) => {
      console.log(`YO HERE IS THE RESPONSE: ${response}`);
    })
    .catch((error) => {
      console.log(`THIS GOT THROUGH SO HERE IS THE ERROR: ${error.response}`);
    });
  };

  return (
  <form className='form' onSubmit={search}>
    <label className='label' htmlFor="query">Movie Name</label>
    <input className='input' type='text' name='query' placeholder='Enter a Movie' value={query} onChange={ (event) => setQuery(event.target.value) }/>
    <button className='button' type='submit'>Search </button>
  </form>
  // render some movie cards
  );
  // Here we will also return some movie cards and that will be great
};

export default Search;
