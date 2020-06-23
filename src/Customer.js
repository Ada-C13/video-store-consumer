import React from 'react';

const Customer = (props) => {

  return (
    <div>
      <h3>{props.name}</h3>
      <ul>
        <li>Movies Checked Out: {props.movie_count}</li>
      </ul>
      
    </div>
  )
}

export default Customer;