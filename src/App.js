
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  useEffect(() => {
    
  }, [])
  //create a callback func for customers...to set the selected customer
  //use effect statement to store selectedCustomer locally
  //add func to clear it
  //add func to set it to a new one


    return (
      <section>
        <Header 
        // selectedMovie={selectedMovie}
          // selectedCustomer={selectedCustomer}
          // selectCustomerCallback={selectCustomer}
          // url={URL}
         />
      </section>
    );
}

export default App;