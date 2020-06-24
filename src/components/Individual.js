import React from 'react';

const Individual = (props) => {
  console.log(props)
  return (
    <div id={props.id} className="movie">
      {
        !props.name || (
          <div className="movie__content">
            <p className="movie__content-text">Tilte: {props.name} </p>
            <p className="movie__content-text">Overview: {props.registered_at} </p>
            <p className="movie__content-text">Release date: {props.address} </p>
            <p className="movie__content-text">Total inventory: {props.city} </p>
            <p className="movie__content-text">Total inventory: {props.state} </p>
            <p className="movie__content-text">Total inventory: {props.postal_code} </p>
            <p className="movie__content-text">Total inventory: {props.phone} </p>
            <p className="movie__content-text">Total inventory: {props.account_credit} </p>

          </div>
        )
      }
    </div>
  )
}

export default Individual;