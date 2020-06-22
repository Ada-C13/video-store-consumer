import React, { useState, useEffect } from 'react';

import {
  Link
} from "react-router-dom";

const Customers = (props, onClickCallback ) => {

  let customers = [];

  if (props.customers) {
    customers = props.customers.map((customer) => {
      return (
        <div className="ui card">
          <div className="ui content">
            <p className="ui header">{customer.name}</p>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="ui cards">
      <p></p>
      <ul>
        {customers}
      </ul>
    </div>
  )
}

export default Customers;