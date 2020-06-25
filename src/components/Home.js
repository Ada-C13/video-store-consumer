import React, { useState, useEffect, useCallback } from'react';
import Carousel from 'react-bootstrap/Carousel'


const selectMovies = (movieList, count = 4) => {
  
  const newSelection = {}
  if (movieList.length){ 
    while (Object.keys(newSelection).length < Math.min(count, movieList.length)){
      const movie = randomItem(movieList)
      newSelection[movie.id] = movie;
    }
  };
  return Object.values(newSelection);
 
};

function randomItem(items) {
  return items[Math.floor(Math.random()*items.length)];  
}

const Home = ({movieList}) => {
  const refreshSelectedMovies = () => {
    setTick(tick => tick + 1);
    setTimer(scheduleTimer());
  }

  const scheduleTimer = () => {
    return setTimeout(refreshSelectedMovies, 20 * 1000);
  }

  const [movies,setMovies] = useState([]);
  const [timer,setTimer] = useState(scheduleTimer);
  const setTick = useState(0)[1];
  const cancelTimer = useCallback(() => {
    clearTimeout(timer);
  }, [timer]);

  
  useEffect(() => {
    setMovies(movieList);
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
            { selectMovies(movies, 4).map((movie) => {
              return (
                <Carousel.Item key={`${movie.external_id}${new Date()}`} > 
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