import React from 'react';
import PropTypes from 'prop-types';

const ReleaseYear = ({ releseDate }) => {

  const movieYear = (date) => {
    const result = new Date(date);
    result.getFullYear();
    return result;
  }

  return (
    <h5>Year: {movieYear(releseDate)}</h5>
  );
};

ReleaseYear.propTypes = {
  releseDate: PropTypes.string.isRequired
}

export default ReleaseYear;