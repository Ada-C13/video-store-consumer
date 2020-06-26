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
          console.log(response.data);
        })
        .catch((error) => {
          setError(error.message);
          console.log(error.message);
        });
    };

    statement = <button onClick={onButtonClick}>Check Out</button>;
  }
  console.log(checkedOutMovie)
 

  return (
    <div className="header-nav">
      <nav>
        <p className="selected">Selected Customer: {props.selectedCustomer.name}</p>
        <p className="selected">Selected Movie: {props.selectedMovie.title}</p>
        <p>{statement}</p>
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
      </nav>
    </div>
  );
};

export default Navbar;
