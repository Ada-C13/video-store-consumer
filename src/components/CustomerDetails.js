import React from 'react';

const CustomerDetails = (props) => {
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
      <button className='CustomerDetails' onClick={onButtonClick}>
        Select User
      </button>
    </div>
  );
};

export default CustomerDetails;
