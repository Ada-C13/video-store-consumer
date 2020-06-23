import React from 'react';
import PropTypes from 'prop-types';

const AppHeader = ({text, counter, clickCallback}) => {
  // const {a} = {a:3}  
  // const [b,c] = [a,2]
  //const {text} = props;
  const  onClick = (event) => {
    event.preventDefault(); // prevents the brower from performing the default event responeses
    clickCallback();
  };
  return (
      <header className="App-header" onClick={onClick}>
        <h1 className="App-title">{text}:{counter}</h1>
      </header>
    
  );
};
 
AppHeader.propTypes = {
  text: PropTypes.string.isRequired,
  counter: PropTypes.number,
  clickCallback: PropTypes.func.isRequired

  
};
export default AppHeader;
