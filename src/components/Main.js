import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home';
import Library from '../components/Library';
import Customers from '../components/Customers';
import Search from '../components/Search';

const Main = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>

      <Route exact path='/Library'>
          <Library setSelectedMovieCallBack={props.setSelectedMovieCallBack} />
      </Route>

      <Route exact path='/Customers' >
        <Customers setSelectedCustomerCallBack={props.setSelectedCustomerCallBack} />
      </Route>

      <Route exact path='/Search' >
        <Search setStatusCallback={props.setStatusCallback} />
      </Route>
    </Switch>
  );
};

export default Main;
