
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Store.css';
import Search from './Search';


const Store = (props) => {


  const onSubmitCallback = (searchTerm) => {
    props.history.push(`/results/${searchTerm}`)
  }

  // By using this Hook, you tell React that your component needs to do something 
  // after render.
  // useEffect takes a function(getMovies) which can contain any kind of operation including side effects
  // Also takes a second argument as an array [], 
  // in this array you can pass variables. When any of this variable updates it will cause the useEffect to run again
  // useEffect(() => { onSubmitCallback(endPoint); }, [endPoint]); 


  return (
    <main>
      <div>
        <Search
          onSubmitCallback={onSubmitCallback} 
        />
      </div>
    </main>
  );
}

export default Store;