import React, { useEffect, useState, useCallback } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';

// import './SearchResult.css';

const SearchResult = ({ title, overview, release_date, image_url, id }) => {
  // TODO: If the image_url is "http://lorempixel.com/185/278/", we won't print an image below
  
  return (
    <section>
      <img src={image_url} />
      <p>Title: {title}</p>
      <p>Overview: {overview}</p>
      <p>Release Date: {release_date}</p>
    </section>
  );
};

export default SearchResult;