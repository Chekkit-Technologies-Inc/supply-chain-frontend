import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './home';

const Reports = () => {
  return (
    <Switch>
      <Route exact path={'/home'}>
        <Home />
      </Route>
      <Redirect to={`/404`} />
    </Switch>
  );
};

export default Reports;
