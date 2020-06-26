import React from 'react';
import PropTypes from 'prop-types';
import Movies from './Movies';


import './Home.css';

const Home = (props) => {
  return (
    <div>
      <h2>Welcome to I<span role="img" aria-label="heart">♥️</span>VIDEO!</h2>
      <main className="view-all-list">
        <h3>Recently Added Movies</h3>
        <section className="list">
          <Movies list={props.recentMovies} onSelectCallback={props.onSelectCallback}/>
        </section>
        <h3>Popular Movies</h3>
        <section className="list"> 
          <Movies list={props.popularMovies} onSelectCallback={props.onSelectCallback}/>
        </section>
      </main>
    </div>
  );
}

Home.propTypes = {
  recentMovies: PropTypes.array.isRequired,
  popularMovies: PropTypes.array.isRequired,
  onSelectCallback: PropTypes.func.isRequired
}

export default Home;