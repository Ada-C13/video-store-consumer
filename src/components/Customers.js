import React, {useState, useEffect} from 'react';

const Customers = ({name, registerdAt, address, city, state, postalCode, phone, accountCredit, moviesCheckedOutCount} ) => {

  return (
    <div>
      <div>
        {name}
        {registerdAt}
        {address}
        {city}
        {state}
        {postalCode}
        {phone}
        {accountCredit}
        {moviesCheckedOutCount}
      </div>
    </div>
  );
}

export default Customers;