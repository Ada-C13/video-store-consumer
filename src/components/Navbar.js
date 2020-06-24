import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  console.log(props);
  return (
    <div className='Navbar'>
      <nav>
        <p>Selected Customer: {props.selectedCustomer.name}</p>
        <p>Selected Movie: {props.selectedMovie.title}</p>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Library'>Library</Link>
          </li>
          <li>
            <Link to='/Customers'>Customers</Link>
          </li>
          <li>
            <Link to='/Search'>Search</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
