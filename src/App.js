import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Search from './components/Search';
import "./App.css"

const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  const [status, setStatus] = useState(null)

  console.log(selectedCustomer);
  console.log(selectedMovie);
 

  return (
    <div className='App'>
      <Navbar
        selectedCustomer={selectedCustomer}
        selectedMovie={selectedMovie}
        setStatusCallback={setStatus}
      />

      {status && <div className="status">
        <div className="status-alert">{status}</div>
        <button onClick= {() => setStatus(null)}>Dismiss</button> 
      </div>}

      <Main
        setSelectedCustomerCallBack={setSelectedCustomer}
        setSelectedMovieCallBack={setSelectedMovie}
        setStatusCallback={setStatus}
      />
    </div>
  );
};

export default App;
