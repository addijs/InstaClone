import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import Main from './pages/main'
import Login from './pages/login'

const Routes = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/main' component={Main} />
      </Switch>
    </Router>
  </Provider>
);

export default Routes;