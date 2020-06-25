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
    <h3>
      Just not another Netflix site
    </h3>
    <Carousel>
      { selectedMovies.map((movie) => {
        return (
          <Carousel.Item> 
            <div className="home-card-body">
              <img className="home-image" src={movie.image_url} alt={movie.title} />
            </div>
        </Carousel.Item>
        );
      }) 
      }
 
    </Carousel>
      <div>
        <img className="home-img w-100" src="https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3452&q=80" alt="movie popcorn" />
      </div>
  </>
 
  
  )
}

export default Home;