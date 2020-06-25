
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Customers from './Customers';
import Library from './Library';
import Search from './Search';
import axios from 'axios'

const Header = () => {
  const URL = "http://localhost:3000/"
  
  //Customer
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  
  const selectCustomer = (selectedCustomer) => {
    setSelectedCustomer(selectedCustomer);
    return;
  }

  //Movie
  const [selectedMovie, setSelectedMovie] = useState(null);

  const selectMovie = (selectedMovie) => {
    setSelectedMovie(selectedMovie);
    return;
  }

  //Search
  const [searchedMovieList, setSearchedMovieList] = useState([]);

  const searchMovies = (arrayOfMovies) => {
    setSearchedMovieList(arrayOfMovies);
    return;
  }

  //reset the selected customer and selected movie
  const reset = () => {
    setSelectedCustomer(null);
    setSelectedMovie(null);
  }

  // Checkout a movie
  const [message, setMessage] = useState("");

  const check_out = () => {
    // POST /rentals/:title/check-out
    if (selectedMovie && selectedCustomer){
      const title = selectedMovie.title
      const customer_id = selectedCustomer.id
      const rental = {
        customer_id: customer_id,
        movie_id: selectedMovie.id,
        checkout_date: new Date(),
        due_date: new Date(Date.now()+ 7 * 1000 * 60 * 60 * 24),
        returned: false
      }

    axios.post(`${URL}rentals/${title}/check-out`, rental)
    .then((response) => {
      // const newRental= response.data;
      if (response.status === 200 || response.status === "OK"){
        setMessage("Rental is successfully checked-out")
        console.log(message)
      }  
    })
   
    .catch((error) => {
      setMessage(error.message);
      console.log(error.message);
    });
 
    console.log(rental)
    setSelectedCustomer(null);
    setSelectedMovie(null);
  }
}

  return (
  <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand float-left w-100">
          <a href="/"><img className="w-75" src="https://lh3.googleusercontent.com/pw/ACtC-3emDsynMN5vJmfTvCqR6lWWxeBiBAPLymsKLn8sOq-t8zAQPwLo_f_2YITgWrq_BDWr-h43ohiIUkLm77quCDkSqNMsGsnNlm6AITEUYQeJ7I3Lha95sLe5tDNw9aBQNMAZwr70RbiNI0_LD2XNrpmn=w400-h137-no?authuser=0"/></a>
        </div>
          <ul className="navbar-nav mr-auto float-left">
            <li><Link to={'/'} className="nav-link">Home</Link></li>
            <li><Link to={'/library'} className="nav-link">Library</Link></li>
            <li><Link to={'/customers'} className="nav-link">Customers</Link></li>
            <li><Link to={'/search'} className="nav-link">Search</Link></li>
          </ul>
          <div className="w-25"></div>
          <div className="selected w-75 d-flex justify-content-end">
            <ul className="list-group list-group-horizontal text-center">
              <li className={ selectedCustomer ? "list-group-item active" : "list-group-item text-muted"}>{selectedCustomer ? selectedCustomer.name : "No Customer Selected"} </li>
              <li className={ selectedMovie ? "list-group-item active" : "list-group-item text-muted"}> {selectedMovie ? selectedMovie.title : "No Movie Selected"} </li>
              <button className={ selectedCustomer && selectedMovie ? "btn btn-success text-decoration-none" : "invisible" } onClick = {check_out}>Checkout</button>
            </ul>
          </div>
          <button  onClick = {reset}>Reset</button>
          <div className="w-100"></div>
          <div className="w-100 text-left row"><p><em>LOOK AT ME{message}</em></p></div>
        </nav>
        
        <Switch> 
            <Route exact path='/' component={Home} />
            <Route 
            path='/library'
            render={(props) => (
              <Library {...props} 
              url={URL+"/movies"}
              selectMovieCallback={selectMovie}/>
            )} />
            <Route 
            path='/customers'
            render={(props) => (
              <Customers {...props} 
              url={URL+"/customers"}
              selectCustomerCallback={selectCustomer}
              />
            )} />
            
            <Route 
            path='/search'
            render={(props) => (
              <Search {...props}
              url={URL+"/movies"}
              // submitMovieSearch={searchMovies} 
              />
            )} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default Header;