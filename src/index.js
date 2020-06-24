import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
