import React, { useState } from 'react';
import AppHeader from './components/AppHeader'
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  
  return (
    <div className="App">
      <AppHeader 
        text="Click Refresher in React" 
        counter={counter}
        clickCallback={incrementCounter} 
        />
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
};
 

export default App;
