import React,{useState} from 'react';
import Movie from './Movie';
import Customers from './Customers'


const Selected = ({customerId, movieTitle}) => {

  return (
    <div>
      <p>Selected Customer: {customerId}</p>
      <p>Selected Movie: {movieTitle}</p>
    </div>
  );
}

export default Selected;