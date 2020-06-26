import React, { useEffect, useState, useCallback } from 'react';
// import PropTypes from 'prop-types';

import './SearchResult.css';

const SearchResult = ({ title, overview, release_date, image_url, id }) => {
  // TODO: If the image_url is "http://lorempixel.com/185/278/", we won't print an image below
  
  return (
    <div className="movie">
    <div className="movie-image">
      <img src={image_url} alt="movie cover pic" />
    </div>
    <div className="movie-overview">
      <h3>{title}</h3>
      <p>{overview}</p>
    </div>
    <div className="movie-buttons">
      <button className="movie-button button-primary">Add to Library</button>
    </div>
  </div>
  );
};

export default SearchResult;