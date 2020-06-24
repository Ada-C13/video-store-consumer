import React from 'react';

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

export default ErrorCard;