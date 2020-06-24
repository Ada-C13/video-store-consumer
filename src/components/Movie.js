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
                    {/* <p className="movie__content-text">Total inventory: {props.inventory} </p> */}
                    <button
                      className="add-library-button"
                      // onClick={props.onSelectMovie}
                    > Select
                    </button>
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