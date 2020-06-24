import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");

  // let setSelectedCustomerCallBack = (customerId) => {
  //   setSelectedCustomer(customerId)
  // };
  console.log(selectedCustomer);
  console.log(selectedMovie);

  return (
    <div className='App'>
      <Navbar
        selectedCustomer={selectedCustomer}
        selectedMovie={selectedMovie}
      />
      <Main
        setSelectedCustomerCallBack={setSelectedCustomer}
        setSelectedMovieCallBack={setSelectedMovie}
      />
    </div>
  );
};

export default App;
