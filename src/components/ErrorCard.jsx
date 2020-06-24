import React from 'react';
import PropTypes from 'prop-types';

const ErrorCard = (props) => {

  return (
    <div className="ui container mt mb">
      <div className="ui negative message">
        <div className="header">
          Error detected:
        </div>
        <p>{props.message}</p>
      </div>
    </div>
  )
};

ErrorCard.propTypes = {
  message: PropTypes.string
};

export default ErrorCard;