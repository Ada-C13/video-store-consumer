import React, { useEffect, useState } from'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import './MovieSearch.css';

const BASE_URL = 'http://localhost:3000/'

const MovieSearch = ({ url, movieList, selectMovie }) => {

  const [ searchBar, setSearchBar ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);
  const [ libraryResults, setLibraryResults ] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState([]);
  
  const onInputChange = (event) => {
		let newSearch = { ...searchBar };
		newSearch = event.target.value;
    setSearchBar(newSearch);
  };

  const onSearchSubmit = (event) => {
    event.preventDefault();
  //   // TODO: create a callback function as props
  //   // props.searchMovieCallBack(searchBar);
    // console.log(BASE_URL + `movies?query=#{searchBar}`)
    // const newLibraryResults = movieList.filter((movie) => movie.title.toLowerCase().includes(searchBar.toLowerCase()));
    const search_url = `${url}/movies?query=${searchBar}`;
    
    if (searchBar) {
      axios
      .get(search_url)
      .then((response) => {
        console.log(response.data)
        const newSearchResults = response.data;
        setSearchResults(newSearchResults);
        // setLibraryResults(newLibraryResults);
        setErrorMessage(null);
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
      })
    }
  };

  const allSearchResults = searchResults.map((movie) => {
    return <Movie key={movie.external_id} movie={movie} selectMovie={selectMovie} />
  });

  // const allLibraryResults = libraryResults.map((movie) => {
  //   return <Movie key={movie.external_id} movie={movie} selectMovie={selectMovie} />
  // });

  
  
  return (
    <div>
      <form onSubmit={ onSearchSubmit }>
        <h3>Movie Search</h3>
        <input
          type='type'
          name='query'
          className='searchbox'
          onChange={onInputChange}
          value={searchBar}
        />

        <input
          className="btn btn-primary"
          type="submit"
          name="submit"
          value="Search"
          onClick={ onSearchSubmit }
        />
      </form>

      {/* <section className="container">
        <h3> Library Results </h3>
        {allLibraryResults}
      </section> */}

      <section className="container">
        <h3> Movie DB Search Results </h3>
        {allSearchResults}
      </section>

    </div>
    
  )
}

export default MovieSearch;