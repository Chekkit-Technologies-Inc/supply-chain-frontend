import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import ReportsBase from './reports-base';

const Reports = () => {
  return (
    <Switch>
      <Route exact path={'/reports'}>
        <ReportsBase />
      </Route>
      <Redirect to={`/404`} />
    </Switch>
  );
};

export default Reports;
