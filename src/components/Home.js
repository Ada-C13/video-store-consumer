import React, { useState, useEffect, useCallback } from'react';
import Carousel from 'react-bootstrap/Carousel'


const selectMovies = (movieList, count = 4) => {
  
  const newArray = []
  if (movieList.length){ 
  for (let i = 0; i < count; i++){
    newArray.push(randomItem(movieList));
  }}
  return newArray;
 
};

function randomItem(items) {
  return items[Math.floor(Math.random()*items.length)];  
}

const Home = ({movieList}) => {

  const refreshSelectedMovies = () => {
    setSelectedMovies(selectMovies(movieList));
    setTimer(scheduleTimer());
  }

  const scheduleTimer = () => {
    return setTimeout(refreshSelectedMovies, 5 * 1000)
  }

  const [selectedMovies,setSelectedMovies] = useState([]);
  const [timer,setTimer] = useState(scheduleTimer);
  
  const cancelTimer = useCallback(() => {
    clearTimeout(timer);
  }, [timer]);

  
  useEffect(() => {
    setSelectedMovies(selectMovies(movieList));
  },[movieList])

  useEffect(() => {
    return () =>{
      cancelTimer();
    }
  },[cancelTimer]);

  return (
    <div className="homepage-main">

      <div className="card learn-card">
        <img className="card-img learn-img" src="https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3452&q=80" alt="movie popcorn"/>
        <div className="card-img-overlay text-center align-items-center caption-6 d-flex justify-content-around flex-column hp-block">
          <Carousel>
            { selectedMovies.map((movie) => {
              return (
                <Carousel.Item key={movie.external_id} > 
                  <img className="home-image" src={movie.image_url} alt={movie.title}  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          
          <h1 className="card-text text-white text-bolder">Just Another Video Store . . .</h1> 
        </div>
      </div>
    </div>
  )
}

export default Home;