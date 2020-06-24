import React, { useState, useEffect } from'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
// setTimeout(function, milliseconds)


const selectMovies = (movieList, count = 4) => {
  
  const newArray = []
  if (movieList.length){ 
  for (let i = 0; i < count; i++){
    newArray.push(randomItem(movieList));
  }}
  return newArray;
 
};
function randomItem(items)
{
return items[Math.floor(Math.random()*items.length)];  
}

const Home = ({movieList}) => {
  const scheduleTimer = () => {
    return setTimeout(refreshSelectedMovies, 5 * 1000)
  }
  const refreshSelectedMovies = () => {
    setSelectedMovies(selectMovies(movieList));
    setTimer(scheduleTimer());
  }
  const [selectedMovies,setSelectedMovies] = useState([]);
  const [timer,setTimer] = useState(scheduleTimer);
  useEffect(() => {
    setSelectedMovies(selectMovies(movieList));
  },[movieList])
  return (
    <>
    <Carousel>
      { selectedMovies.map((movie) => {
        return (
          <Carousel.Item> 
          <Card className="movie-card">
      <div>
        <div className="movie-card-body">
          <img className="movie-card-image" src={movie.image_url} alt={movie.title} />
          <h4 className="movie-card-title"> {movie.title} </h4>
          <div>          
            <div className="movie-card-release-date"> Released on {movie.release_date} </div>
            <div className="movie-card-description"> {movie.overview} </div>
          </div>  
        </div>
      </div>
    </Card>
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        );
      }) 
      
} 
      
    </Carousel>

    <h3>
      Welcome to our website where we offer the best movies 
    </h3>
  </>
 
  
  )
}

export default Home;