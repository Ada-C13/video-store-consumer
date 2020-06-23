import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [nav, setNav] = useState({
    home: true,
    search: false,
    library: false,
    customers: false
  });


  const onItemClick = (event) => {
    const newNav = {
      home: false,
      search: false,
      library: false,
      customers: false,
    }

    console.log(event.target.name);
    newNav[event.target.name] = true;
    setNav(newNav);
  };

  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary pointing menu">
        
        <Link to={`/home`} name="home" onClick={onItemClick} 
              className={ nav.home ? "active item" : "item" }>Home</Link>
        
        <Link to={`/search`} name="search" 
              onClick={onItemClick} className={ nav.search ? "active item" : "item" }>Search</Link>
        
        <Link to={`/library`} name="library" 
              onClick={onItemClick} className={ nav.library ? "active item" : "item" }>Library</Link>
        
        <Link to={`/customers`} name="customers" 
              onClick={onItemClick} className={ nav.customers ? "active item" : "item" }>Customers</Link>
      
      </div>
      <div class="card">
        <h2>Rental Customer: { props.customerPick ? props.customerPick.name : ""}</h2>
      </div>
    </div>
  )
}

export default Navbar;