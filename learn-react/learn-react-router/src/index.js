import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Users from './Users';
import About from './About';
import NoMatch from './NoMatch';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}>
      </Route>
      <Route path="users" component={Users}>
      </Route>
      <Route path="*" component={NoMatch}>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
