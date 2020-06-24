import React from 'react';
import PropTypes from 'prop-types';

const ErrorCard = (props) => {

  return (
    <div className="ui container mt mb">
      <div class="ui negative message">
        <div class="header">
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