import React from 'react';

const SuccessCard = (props) => {

  return (
    <div className="ui container mt mb">
      <div class="ui positive message">
        <div class="header">
          Success!
        </div>
        <p>{props.message}</p>
      </div>
    </div>
  )
};

export default SuccessCard;