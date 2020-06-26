import React from 'react';
import './CustomerDetails.css';

const CustomerDetails = (props) => {
  const onButtonClick = () => {
    props.setSelectedCustomerCallBack(props);
  };

  return (
    <div>
      <section class="customers-container">
        <table class="table">
          <tr>
            <td width="200">{props.name}</td>
            <td width="250">{props.address}</td>
            <td width="125">{props.city}</td>
            <td width="75">{props.state}</td>
            <td width="100">{props.postal_code}</td>
            <td width="125">{props.phone}</td>
            <td width="100">{props.account_credit}</td>
            <td width="50">{props.movies_checked_out_count}</td>
            <button className='select-user-button' onClick={onButtonClick}>
              Select User
            </button>
          </tr>
        </table>
      </section>
    </div>
  );
};

export default CustomerDetails;
