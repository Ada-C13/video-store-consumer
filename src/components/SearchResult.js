import React from 'react';
import PropTypes from 'prop-types';

import './SearchResult.css';

const SearchResult = ({ title, overview, release_date, image_url, id }) => {
  return (
    <div className="movie">
    <div className="movie-image">
      <img src={image_url} alt="movie cover pic" />
    </div>
    <div className="movie-overview">
      <h3>{title}</h3>
      <p>{overview}</p>
      <p>Release Date: {release_date}</p>
    </div>
    <div className="movie-buttons">
      <button className="movie-button button-primary">Add to Library</button>
    </div>
  </div>
  );
};

SearchResult.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default SearchResult;