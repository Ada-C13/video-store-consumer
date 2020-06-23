import React from 'react';

const Customer = (props) => {
  return (
    <div>
      <li>
        <strong>{props.name}</strong>
      </li>
      <p>{props.registered_at}</p>
      <p>{props.phone}</p>
    </div>
  );
};

export default Customer;
