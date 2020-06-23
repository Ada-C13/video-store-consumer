import React, {useState} from 'react';
import PropTypes from "prop-types";

const CustomerCard = ({id, name, movies_checked_out_count, registered_at, phone}) => {

  return (
    <div className='card'> 
      {/* <img className='card--image'
      src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`} alt={title + ' poster'}/>
      <div className='card--content'>
        <h3 className='card--title'>{title}</h3>
        <p><small>RELEASE DATE: {release_date}</small></p>
        <p><small>RATING: {vote_average}</small></p>
        <p className='card--desc'>{overview}</p>
      </div> */}
      <h1>{name}</h1>
      <h2>THIS IS A CUSTOMER CARD</h2>
    </div>
    );
  };


CustomerCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  movies_checked_out_count: PropTypes.number,
  registered_at: PropTypes.string,
  phone: PropTypes.string
};

export default CustomerCard;


// this is what Customer looks like
// {
//   "id": 1,
//   "name": "Shelley Rocha",
//   "registered_at": "2015-04-29T14:54:14.000Z",
//   "address": "Ap #292-5216 Ipsum Rd.",
//   "city": "Hillsboro",
//   "state": "OR",
//   "postal_code": "24309",
//   "phone": "(322) 510-8695",
//   "account_credit": 13.15,
//   "movies_checked_out_count": 0
// },