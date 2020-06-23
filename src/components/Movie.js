import React from 'react';

const Movie = (props) => {
  console.log(props)
  return (
    <div id={props.id} className="movie">
      {
        !props.title || (
          <div className="movie__content">
            <p className="movie__content-text">Tilte: {props.title} </p>
            <p className="movie__content-text">Overview: {props.overview} </p>
            <p className="movie__content-text">Release date: {props.release_date} </p>
            <p className="movie__content-text">Availabe Inventory: {props.available_inventory} </p>
            <p className="movie__content-text">Total inventory: {props.inventory} </p>
          </div>
        )
      }
    </div>
  )
}

export default Movie;