import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './../Dashboard';
import Monikimmers from './../Monikimmers';
import Wavelength from './../Wavelength';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/Monikimmers">
        <Monikimmers />
      </Route>
      <Route exact path="/Wavelength">
        <Wavelength />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
