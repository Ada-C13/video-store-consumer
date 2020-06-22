import React, { useState } from 'react';

const SearchBar = (props) => {

  const [searchInput, setSearchInput] = useState("");
  
  const onInputChange = (event) => {
    const newInput = event.target.value;
    setSearchInput(newInput);
  };

  const onFormSubmit = (event) => {

  };
  
  return (
    <div className="ui container">
      <h1 className="ui header">Type the movie name:</h1>
      <form className="ui input big">
        <input type="text" placeholder="Frozen" onChange={onInputChange} />
        <button className="ui big button">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;