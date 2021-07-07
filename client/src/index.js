import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserApp from './components/Userapp';
import {BrowserRouter as Router, Switch, Route, NavLink} from 
'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
   
    <App  />
 
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

