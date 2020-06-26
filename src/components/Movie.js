import React from 'react';
import './Movie.css';

const Movie = (props) => {
  const {movie} = props

  return (
    <div id={props.id} className="movie">
      {
        movie && (
          <section>
            <div class="container">
              <div class="col-md-4">
                <div class="card profile-card-1">
                    <h5 class="card-title">Tilte: {movie.title} </h5>
                    <div class="card-content">
                    <p className="movie__content-text">Overview: {movie.overview} </p>
                    <p className="movie__content-text">Release date: {movie.release_date} </p>
                    <div>
                      <input className="add-library-button" type="button" value="Select This Movie" onClick={() => props.onSubmitMovieCallback(movie)} />
                    </div>
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