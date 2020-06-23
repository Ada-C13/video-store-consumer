// import React from 'react';
// import PropTypes from 'prop-types';

// const Customer = ({ id, name, address}) => {
//   return (
//     <div>
//       <h3>Customer</h3>
//       <p> {id}, {name}, {address}</p>
//     </div>
//   )
// }
// export default Customer;

import React from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {
  return (
    <div>
      <h3>Customer</h3>
      <p> {props.id}, {props.name}, {props.address}</p>
    </div>
  )
}
export default Customer;