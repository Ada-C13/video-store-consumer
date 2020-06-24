import React, { useState, useEffect } from "react";
import AppHeader from "./components/AppHeader";
import Customers from "./components/Customers";
import Library from "./components/Library";
import Search from "./components/Search";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

const API_URL_BASE = "http://localhost:3000";

const App = () => {
	const [errorMessage, setErrorMessage] = useState(null);
	const [currentCustomer, setCurrentCustomer] = useState(null);
	const [currentMovies, setCurrentMovies] = useState(null);

	const resetState = () => {
		setCurrentMovies(null);
		setCurrentCustomer(null);
	};

	const setMovieState = (movie) => {
		setCurrentMovies(movie);
	};

	const setCustomerState = (customer) => {
		setCurrentCustomer(customer);
	};

	const addRental = () => {
		axios.post(
				API_URL_BASE + `/rentals/${currentMovies.title}/check-out`,
				{
          customer_id: currentCustomer.id,
          due_date: new Date(Date.now() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 7)
				}
			)
			.then(() => {
				resetState();
			})
			.catch((error) => {
				setErrorMessage(error.message);
			});
	};

	return (
		<div className="App">
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/customers">Customers</Link>
							</li>
							<li>
								<Link to="/movies">Library</Link>
							</li>
							<li>
								<Link to="/search">Search</Link>
							</li>
						</ul>
					</nav>
          <div >
            <ul >
              <li>{currentMovies? 'Selected Movie:' : null} { currentMovies ? currentMovies.title : null}</li>
              <li>{currentCustomer? 'Selected Customer:' : null} {currentCustomer ? currentCustomer.name : null}</li>
              <li>
                {currentMovies && currentCustomer ? <button onClick={addRental}>Checkout</button> : null}
              </li>
            </ul>
          </div>
					<Switch>
						<Route
							path="/customers"
							render={(props) => (
                <Customers {...props} API_URL_BASE={API_URL_BASE}
                onSelectedCustomerCallback={setCustomerState}
                />
							)}></Route>
						<Route
							path="/movies"
							render={(props) => (
								<Library
									{...props}
									API_URL_BASE={API_URL_BASE}
									onSelectedMovieCallback={setMovieState}
								/>
							)}></Route>
						<Route path="/users">
							<Users />
						</Route>
            <Route
							path="/search"
							render={(props) => (
								<Search
									{...props}
                  API_URL_BASE={API_URL_BASE}
								/>
							)}></Route>
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
	return <h2>Home</h2>;
}

function Users() {
	return <h2>Users</h2>;
}

export default App;
