import React, { useEffect, useState, useCallback } from 'react';
// import PropTypes from 'prop-types';

import './Search.css';
import SearchResult from './SearchResult';

const Search = ({ results, onSearchMovieCallback }) => {
  const resultsList = results.map(result => 
    <SearchResult
      title={result.title}
      overview={result.overview}
      release_date={result.release_date}
      image_url={result.image_url}
      id={result.external_id}
      key={result.external_id}
    />
  );

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
        <div className="movie-search-form__form">
          <label className="movie-search-form__form-label" htmlFor="query"></label>
          <input 
            className="movie-search-form__form-textarea" 
            type="text" 
            name="query"
            placeholder="movie title" 
            value={query.query}
            onChange={onInputChange}
          />
          <input type="submit" className="movie-search-form__form-button" value="Search Movies"/>
        </div>
      </form>
      {resultsList}
    </section>
  ); 
}

export default Search;