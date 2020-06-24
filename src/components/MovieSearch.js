import React, { useEffect, useState } from'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import './MovieSearch.css';

const MovieSearch = ({ url, movieList, selectMovie, addMovie }) => {

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

    if (searchBar) {
      const newLibraryResults = movieList.filter(movie => movie.title.toLowerCase().includes(searchBar.toLowerCase()));

      axios
      .get(`${url}/movies?query=${searchBar}`)
      .then((response) => {
        console.log(response.data)
        const newSearchResults = response.data;
        setSearchResults(newSearchResults);
        setLibraryResults(newLibraryResults);
        setErrorMessage(null);
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
      })
    }
  }

  const selectMovieToAdd = (id, title, overview, release_date, image_url, external_id) => {
    const newMovie = {id: id, title: title, overview: overview, release_date: release_date, image_url: image_url, external_id: external_id};

    if (!movieList.find(movie => movie.external_id === external_id)) {
      let newLibraryResults = [...libraryResults];
      newLibraryResults.push(newMovie);
  
      const newSearchResults = searchResults.filter((movie) => (movie.external_id !== newMovie.external_id))
      setLibraryResults(newLibraryResults)
      setSearchResults(newSearchResults)
  
      addMovie(newMovie)
    }
  };


  const allSearchResults = searchResults.map((movie) => {
    return <Movie key={movie.external_id} movie={movie} selectMovie={selectMovieToAdd} action={"Add to Library"} />
  });

  const allLibraryResults = libraryResults.map((movie) => {
    return <Movie key={movie.external_id} movie={movie} selectMovie={selectMovie} action={"Select Movie"} />
  });


  
  return (
    <div className="container">
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

      <section className="container text-center">
        <h4> Library Results: {allLibraryResults.length} </h4>
        {allLibraryResults}
      </section>

      <section className="container text-center">
        <h4> Movie DB Search Results: {allSearchResults.length} </h4>
        {allSearchResults}
      </section>
    </div>
  )
}


MovieSearch.propTypes = {
  url: PropTypes.string.isRequired,
  movieList: PropTypes.array.isRequired,
  selectMovie: PropTypes.func.isRequired,
}

export default MovieSearch;