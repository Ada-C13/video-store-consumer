import React, { useEffect, useState, useCallback } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';

// import './Search.css';

const Search = ({ results, onSearchMovieCallback }) => {
  // TODO: Make a SearchResult child component
  // TODO: render results into an array of SearchResult components using map

  const [query, setQuery] = useState({
    query: "",
  });

  const onInputChange = (event) => {
    const newQuery = {
      ...query
    };

    newQuery[event.target.name] = event.target.value;
    setQuery(newQuery);
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    onSearchMovieCallback(query);
  };

  return (
    <section className="movie-search">
      <h2>Movie Search</h2>
      <form className="movie-search-form" onSubmit={onSubmit}>
        <div className="movie-search-form__header"></div>
        <div className="movie-search-form__form">
          <label className="movie-search-form__form-label" htmlFor="query">query</label>
          <input 
            className="movie-search-form__form-textarea" 
            type="query" 
            name="query"
            placeholder="search here" 
            value={query.query}
            onChange={onInputChange}
          />
          <input type="submit" className="movie-search-form__form-button" value="Search Movies"/>
        </div>
      </form>
      {results}
    </section>
  ); 
}

export default Search;