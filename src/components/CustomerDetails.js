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
          <tbody>
            <tr>
              <td>{props.name}</td>
              <td>{props.registered_at}</td>
              <td>{props.address}</td>
              <td>{props.city}</td>
              <td>{props.postal_code}</td>
              <td>{props.account_credit}</td>
              <td>{props.movies_checked_out_count}</td>
              <button className='select-user-button' onClick={onButtonClick}>
                Select User
              </button>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CustomerDetails;
