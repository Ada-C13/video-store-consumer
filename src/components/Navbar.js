import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../App.css"

const Navbar = (props) => {
  const base_url = 'http://localhost:3000/rentals/';
  const [checkedOutMovie, setCheckedOutMovie] = useState(null);
  const [error, setError] = useState(null);
  let statement;
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 7);

  if (props.selectedMovie && props.selectedCustomer) {
   
    const onButtonClick = (event) => {
      event.preventDefault();

      axios
        .post(base_url + props.selectedMovie.title + '/check-out', {
          customer_id: props.selectedCustomer.id, due_date: dueDate
        })
        .then((response) => {
          setCheckedOutMovie(response.data);
          // setStatusCallback("Movie successfully rented. It is due back in one week.");
          console.log(response.data);
        })
        .catch((error) => {
          // setStatusCallback("Failed to rent movie.");
          setError(error.message);
          console.log(error.message);
        });
    };

    statement = <button onClick={onButtonClick}>Check Out</button>;
  }
  console.log(checkedOutMovie)
 

  return (
    <div className="header">
      <div className="header-first-row">
        <p className="store-name">MOCKBUSTER</p>
        <div className="selected-view">
            <p className="selected">Selected Customer: {props.selectedCustomer.name}</p>
            <p className="selected">Selected Movie: {props.selectedMovie.title}</p>
            <p class="checkout-button">{statement}</p>
          </div>
        </div>
      <nav className="header-nav">
        <div>
          <div class="links">
            <p class="nav-link">
              <Link to='/'>HOME</Link>
            </p>
            <p class="nav-link">
              <Link to='/Library'>LIBRARY</Link>
            </p>
            <p class="nav-link">
              <Link to='/Customers'>CUSTOMERS</Link>
            </p>
            <p class="nav-link">
              <Link to='/Search'>SEARCH</Link>
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
