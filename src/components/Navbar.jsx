import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = (props) => {
  const location = useLocation();
  const [nav, setNav] = useState([]);

  useEffect(() => {
    const newNav = {
      home: false,
      search: false,
      library: false,
      customers: false,
    };

    newNav[location.pathname.slice(1)] = true;
    setNav(newNav);
  }, []);

  const onItemClick = (event) => {
    const newNav = {
      home: false,
      search: false,
      library: false,
      customers: false,
    };

    newNav[event.target.name] = true;
    setNav(newNav);
    props.setError(null);
    props.setSuccess(null);
  };

  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary pointing menu">
        <Link
          to={`/home`}
          name="home"
          onClick={onItemClick}
          className={nav.home ? "active item" : "item"}
        >
          Home
        </Link>

        <Link
          to={`/search`}
          name="search"
          onClick={onItemClick}
          className={nav.search ? "active item" : "item"}
        >
          Search
        </Link>

        <Link
          to={`/library`}
          name="library"
          onClick={onItemClick}
          className={nav.library ? "active item" : "item"}
        >
          Library
        </Link>

        <Link
          to={`/customers`}
          name="customers"
          onClick={onItemClick}
          className={nav.customers ? "active item" : "item"}
        >
          Customers
        </Link>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  setError: PropTypes.func.isRequired,
  setSuccess: PropTypes.func.isRequired,
};

export default Navbar;
