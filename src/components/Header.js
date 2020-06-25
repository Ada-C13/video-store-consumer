
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
        setMessage("Rental has been successfully checked-out")
        console.log(message)

        setTimeout(() => {
          setMessage(null);
        }, 5000);
      }  
    })
   
    .catch((error) => {
      setMessage(error.message);
      console.log(error.message);

      setTimeout(() => {
        setMessage(null);
      }, 5000);
    });

    setSelectedCustomer(null);
    setSelectedMovie(null);
  }
}

  return (
  <Router>
    <div>
    <div className={ message ? "pt-4 alert alert-warning" : "hidden mb-n3" } role="alert"><p><em><strong>{message}</strong></em></p></div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className=" navbar-brand float-left w-50">
          <a href="/"><img className="w-75" src="https://lh3.googleusercontent.com/pw/ACtC-3emDsynMN5vJmfTvCqR6lWWxeBiBAPLymsKLn8sOq-t8zAQPwLo_f_2YITgWrq_BDWr-h43ohiIUkLm77quCDkSqNMsGsnNlm6AITEUYQeJ7I3Lha95sLe5tDNw9aBQNMAZwr70RbiNI0_LD2XNrpmn=w400-h137-no?authuser=0"/></a>
        </div>
        <ul className=" navbar-nav mr-auto float-left">
          <li><Link to={'/'} className="nav-link">Home</Link></li>
          <li><Link to={'/library'} className="nav-link">Library</Link></li>
          <li><Link to={'/customers'} className="nav-link">Customers</Link></li>
          <li><Link to={'/search'} className="nav-link">Search</Link></li>
        </ul>
        <div className="w-50"></div>
        <div className="selected w-100 d-flex justify-content-end ">
          <div className="btn-group btn-group-sm">
            <button className={ selectedCustomer ? "active btn btn-danger" : "disabled btn btn-danger"}>{selectedCustomer ? selectedCustomer.name : <a href="/customers" className="text-decoration-none text-white">Select Customer</a>} </button>
            <button className={ selectedMovie ? "active  btn btn-danger" : "disabled btn btn-danger"}> {selectedMovie ? selectedMovie.title : <a href="/library" className="text-decoration-none text-white">Select Movie</a>} </button>
            <button className={ selectedCustomer && selectedMovie ? "btn  btn-success text-decoration-none" : "disabled btn btn-success" } onClick={check_out}>Checkout</button>
            <button className=" btn btn-light border-dark text-decoration-none" onClick = {reset}>Reset</button>
          </div>
        </div>
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