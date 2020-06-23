import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Store from './components/Store';
import Library from './components/Library';
import Routing from './components/Routing'

ReactDOM.render(Routing, document.getElementById('root'))
// ReactDOM.render(<App />, document.getElementById('root'), routing);
registerServiceWorker();
