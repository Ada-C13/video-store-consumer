import React from 'react';

const SearchBar = () => {
  
  return (
    <div className="ui container">
      <h1 class="ui header">Type the movie name:</h1>
      <div className="ui big search">
        <input className="prompt" type="text" placeholder="Frozen" />
      </div>
    </div>
  );
}

export default SearchBar;