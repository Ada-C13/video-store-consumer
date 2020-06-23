
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState({ customer: null });
  const [errorMessage, setErrorMessage] = useState(null);

  const selectCustomer = (selectedCustomerID) => {
    const customer = selectedCustomerID;

  }

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
         />
      </section>
    );
}

export default App;