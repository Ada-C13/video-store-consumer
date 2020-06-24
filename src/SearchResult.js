import React from 'react';
import PropTypes from "prop-types";
import './App.css';

const SearchResult = (props) => {

  return (
    <div>
      <h3>{props.title}</h3>
      <img src={props.image_url} alt="movie poster"/>
    </div>
  )
}


SearchResult.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image_url: PropTypes.string
};

export default SearchResult;