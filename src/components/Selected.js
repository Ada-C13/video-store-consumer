import React,{useState} from 'react';
import Movie from './Movie';
import Customers from './Customers'


const Selected = ({customerId, movieTitle}) => {

  return (
  
    <div>
      Selected Customer: {customerId}
      <br/>
      Selected Movie: {movieTitle}
    </div>
  );
}

export default Selected;