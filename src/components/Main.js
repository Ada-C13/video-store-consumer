import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home';
import Library from '../components/Library';
import Customers from '../components/Customers';
import Search from '../components/Search';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Library' component={Library}></Route>
      <Route exact path='/Customers' component={Customers}></Route>
      <Route exact path='/Search' component={Search}></Route>
    </Switch>
  );
}

export default Main;