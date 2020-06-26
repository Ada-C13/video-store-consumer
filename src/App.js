import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import Customers from "./components/Customers";
import SearchBar from "./components/SearchBar";
import Library from "./components/Library";
import Search from "./components/Search";
import Home from "./components/Home";
import axios from "axios";
import {
  Navbar,
  Nav,
  Card,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "./App.css";

const API_URL_BASE = "http://localhost:3000";

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [currentMovies, setCurrentMovies] = useState(null);
  const history = useHistory();

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
    axios
      .post(API_URL_BASE + `/rentals/${currentMovies.title}/check-out`, {
        customer_id: currentCustomer.id,
        due_date: new Date(
          Date.now() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 7
        ),
      })
      .then(() => {
        resetState();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  const handleSearch = (query) => {
    const path = `/search/${query}`;
    history.push(path);
  };

  return (
    <div className="App">
      <div>
        <Navbar expand="md" fixed="top" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Blockbuster 2020</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/customers">
                Customers
              </Link>
              <Link className="nav-link" to="/movies">
                Library
              </Link>
            </Nav>
            <SearchBar submitSearchTermCallback={handleSearch} />
          </Navbar.Collapse>
        </Navbar>
        <Container className="pages">
          <Row>
            <Col>
              <Card className="rental-info">
                <h4 className="rental-tag">Rental Information</h4>
                <p>
                  {currentMovies ? "Selected Movie: " : null}
                  <strong>{currentMovies ? currentMovies.title : null}</strong>
                </p>
                <p>
                  {currentCustomer ? "Selected Customer: " : null}{" "}
                  <strong>
                    {currentCustomer ? currentCustomer.name : null}
                  </strong>
                </p>
                {currentMovies && currentCustomer ? (
                  <Button
                    className="customer-button"
                    onClick={addRental}
                    variant="primary"
                    type="submit"
                  >
                    {" "}
                    Checkout
                  </Button>
                ) : null}
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Switch>
                <Route
                  path="/customers"
                  render={(props) => (
                    <Customers
                      {...props}
                      API_URL_BASE={API_URL_BASE}
                      onSelectedCustomerCallback={setCustomerState}
                    />
                  )}
                ></Route>
                <Route
                  path="/movies"
                  render={(props) => (
                    <Library
                      {...props}
                      API_URL_BASE={API_URL_BASE}
                      onSelectedMovieCallback={setMovieState}
                    />
                  )}
                ></Route>

                <Route
                  path="/search/:query"
                  render={(props) => (
                    <Search {...props} API_URL_BASE={API_URL_BASE} />
                  )}
                ></Route>
                <Route
                  path="/"
                  render={(props) => (
                    <Home {...props} API_URL_BASE={API_URL_BASE} />
                  )}
                ></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default App;
