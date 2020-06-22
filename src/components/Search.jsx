import React, { useState } from 'react';
import SearchBar from './SearchBar';

const Search = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = () => {

  };

  return (
    <div className="ui container">
      <div className="">
        <SearchBar searchMovies={searchMovies} />
      </div>
        <div class="ui horizontal divider">
        Results
      </div>
    </div>
  )
}

export default Search;