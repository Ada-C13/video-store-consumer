import React from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {

  return(
    <div className="cards">
      <div className="card">
        <div className="content">
          <h3>{props.name}</h3>
          <td>
            <button class="ui olive button" onClick={() => { props.customerCallback(props.id) } }>
              Select Customer
            </button>
          </td>
        </div>
      </div>
    </div>
  )
};

export default Customer
