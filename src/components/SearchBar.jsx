import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {

  const [searchInput, setSearchInput] = useState("");
  
  const onInputChange = (event) => {
    const newInput = event.target.value;
    setSearchInput(newInput);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.searchMovies(searchInput);
  };
  
  return (
    <div className="ui container">
      <h1 className="ui header">Type the movie name:</h1>
      <form className="ui input big" onSubmit={onFormSubmit}>
        <input type="text" placeholder="Frozen" onChange={onInputChange} />
        <button className="ui big button">Search</button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  searchMovies: PropTypes.func.isRequired
};

export default SearchBar;