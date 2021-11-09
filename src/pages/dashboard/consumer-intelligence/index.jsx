import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import CIBase from './ci-base';

const Reports = () => {
  return (
    <Switch>
      <Route exact path={'/consumer-intelligence'}>
        <CIBase />
      </Route>
      <Redirect to={`/404`} />
    </Switch>
  );
};

export default Reports;
