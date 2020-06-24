import React from 'react';

const Individual = (props) => {
  console.log(props)
  return (
    <div id={props.id} className="movie">
      {
        !props.name || (
            <section>
            <div class="container">
              <div class="col-md-4">
                <div class="card profile-card-1">
                    <h5 class="card-title">Tilte: {props.title} </h5>
                    <div class="card-content"></div>
                    <div className="movie__content">
                        <p className="movie__content-text">Name: {props.name} </p>
                        <p className="movie__content-text">Registered_at: {props.registered_at} </p>
                        <p className="movie__content-text">Address: {props.address} </p>
                        <p className="movie__content-text">City: {props.city} </p>
                        <p className="movie__content-text">State: {props.state} </p>
                        <p className="movie__content-text">Postal Code: {props.postal_code} </p>
                        <p className="movie__content-text">Phone: {props.phone} </p>
                        <p className="movie__content-text">Total inventory: {props.account_credit} </p>
                    </div>
                </div>
                </div>
            </div>
          </section >
        )
      }
    </div>
  )
}

export default Individual;