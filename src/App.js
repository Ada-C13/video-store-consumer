import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // let setSelectedCustomerCallBack = (customerId) => {
  //   setSelectedCustomer(customerId)
  // };
  console.log(selectedCustomer);
  console.log(selectedMovie);

  return (
    <div className='App'>
      <Navbar />
      <Main
        setSelectedCustomerCallBack={setSelectedCustomer}
        setSelectedMovieCallBack={setSelectedMovie}
      />
    </div>
  );
};

export default App;
