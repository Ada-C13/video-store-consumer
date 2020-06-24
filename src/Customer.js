import React from 'react';

const Customer = (props) => {

  return (
    <div>
      <h3>{props.name}</h3>
      <ul>
        <li>Account Credit: {props.account_credit}</li>
        <li>Movies Checked Out: {props.movie_count}</li>
      </ul>
      
    </div>
  )
}
//TODO Customer?
// Customer.propTypes = {
//   id: PropTypes.number,
//   name: PropTypes.string,
//   account_credit: PropTypes.string,
//   movie_count: PropTypes.number
// };

export default Customer;