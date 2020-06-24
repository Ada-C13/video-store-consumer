import React from 'react';
import './Movie.css';

const Movie = (props) => {
  console.log(props)
  return (
    <div id={props.id} className="movie">
      
      {
        !props.title || (
          <section>
            <div class="container">
              <div class="col-md-4">
                <div class="card profile-card-1">
                    <h5 class="card-title">Tilte: {props.title} </h5>
                    <div class="card-content">
                    <p className="movie__content-text">Overview: {props.overview} </p>
                    <p className="movie__content-text">Release date: {props.release_date} </p>
                    <p className="movie__content-text">Total inventory: {props.inventory} </p>
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

export default Movie;