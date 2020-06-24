
import React, { useState, useEffect } from 'react';
import './Store.css';
import Search from './Search';


const Store = (props) => {


  const onSubmitCallback = (searchTerm) => {
    props.history.push(`/results/${searchTerm}`)
  }

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