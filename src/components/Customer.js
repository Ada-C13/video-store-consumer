import React from 'react';

const Customer = (props) => {
  const onButtonClick = () => {
    props.setSelectedCustomerCallBack(props.id);
  };

  return (
    <div>
      <li>
        <strong>{props.name}</strong>
      </li>
      <p>{props.registered_at}</p>
      <p>{props.phone}</p>
      <button className='Customer' onClick={onButtonClick}>
        Select User
      </button>
    </div>
  );
};

export default Customer;
