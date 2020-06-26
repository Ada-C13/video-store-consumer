import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RentalLibrary from "./components/RentalLibrary"
import axios from 'axios';
import './App.css';
import MovieSearch from './components/MovieSearch';
import CustomerList from './components/CustomerList';
import Checkout from './components/Checkout';
import Rentals from './components/Rentals'


const App = (props) => {
  const URL = "http://localhost:3000/"
  const [library, setLibrary] = useState([]);
  const [error, setErrorMessage] = useState([]);
  const [customer, setCustomer] = useState({});
  const [movie, setMovie] = useState({});
  const [rentals, setRentals] = useState([]);
  const [customers, setCustomers] = useState([]);
  
  const setStateEmpty = () => {
    setMovie({});
    setCustomer({});
  }

  const updateCustomer = (newCustomer) => {
    setCustomer(newCustomer);
    const customerIndex = customers.findIndex(c => c.id === newCustomer.id);
   
    let newCustomers = [...customers];
    newCustomers[customerIndex] = newCustomer;

    setCustomers(newCustomers);
  }

  const addMovie = (check_movie) => {
    for (let i = 0; i < library.length; i++) {
      if (check_movie.title === library[i].title) {
        return 
      };
    }
    let new_library = [...library, check_movie];

    setLibrary(new_library);
    axios
      .post(`${URL}movies/add-movie`, {
        title: check_movie.title,
        overview: check_movie.overview,
        release_date: check_movie.release_date,
        image_url: check_movie.poster_path,
        external_id: check_movie.external_id
      })
      .then((response)=> {
        console.log(response.data);
      })
      .catch((error) => {
        setErrorMessage(error);
      });


  };
  
  useEffect(() => {
    axios
      .get(`${URL}/movies`)
      .then((response)=> {
        console.log(response.data);
        setLibrary(response.data); //
      })
      .catch((error) => {
        setErrorMessage(error);
      });
    }, []); 
    


  useEffect(() => {
    axios.get(`${URL}customers`)
    .then((response)=> {
      console.log(response.data);
      setCustomers(response.data);
    }).catch((error) => {
      setErrorMessage(error);
      console.log(error);
    });
    }, []);

    useEffect(() => {
      axios
        .get(`${URL}rentals/overdue`)
        .then((response)=> {
          console.log(response.data);
          setRentals(response.data); 
        })
        .catch((error) => {
          setErrorMessage(error);
        });
      }, []); 
 

    return  (
     
      <div className="app"> 
         <h1 className="app-header"> Video Store Inventory Tracker  </h1>
       <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/search"> Movie Search </Link>
              </li>
              <li>
                <Link to="/library"> Rental Library </Link>
              </li>
              <li>
                <Link to="/customers"> Customers </Link>
              </li>
              <li>
                <Link to="/checkout"> Checkout </Link>
              </li>
            </ul>
          </nav>

          <section className="current-selected"> 
             <p> Selected Customer: {customer.name}</p> 
            <div> 
              <p> Selected Movie: {movie.title}</p>
              <img className="movie-card--image" src={`${movie.image_url}`} alt={movie.title} width="60px" height="80px"/>
            </div>
          </section>

          <Switch>
            <Route path="/search">
              <MovieSearch url={URL} addMovieCallback={addMovie}/>
            </Route>
            
            <Route path="/library">
              <RentalLibrary library={library} currentMovieCallback={setMovie}/>
            </Route>

            <Route path="/customers">
              <CustomerList currentCustomerCallback={setCustomer} customers={customers}/>
            </Route>

            <Route path="/checkout">
              <Checkout setStateEmpty={setStateEmpty} movie={movie} customer={customer} updateCustomer={updateCustomer} url={URL}/>
            </Route>

            <Route path="/rentals">
              <Rentals url={URL} rentals={rentals} customers={customers} library={library} currentRentalsCallback={setRentals}/>
            </Route>

            <Route path="/">
              <Home />
            </Route>
         </Switch> 

        </div>
      </Router>
    </div>
  );
};

function Home() {
  return (
    <div className="home-header"> 
      <h1> Welcome to a Video Store Inventory Tracker </h1>
      <p> rental store inventory management tool </p>
    </div>
  );
}

export default App;
