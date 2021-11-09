import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AMBase from './am-base';

const Reports = () => {
  return (
    <Switch>
      <Route exact path={'/asset-management'}>
        <AMBase />
      </Route>
      <Redirect to={`/404`} />
    </Switch>
  );
};

export default Reports;
