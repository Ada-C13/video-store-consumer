import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <nav>
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
