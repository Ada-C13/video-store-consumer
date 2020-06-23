import React, { useState } from 'react';

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

export default SearchBar;