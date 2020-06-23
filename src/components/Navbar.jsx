import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="ui inverted segment">
      <div class="ui inverted secondary pointing menu">
        <a class="item">
          <Link to={`/home`} className="">Home</Link>
        </a>
        <a class="active item">
          <Link to={`/search`} className="">Search</Link>
        </a>
        <a class="item">
          Library
        </a>
        <a class="item">
          Customers
        </a>
      </div>
    </div>
  )
}

export default Navbar;