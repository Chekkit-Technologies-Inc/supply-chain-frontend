import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import OverviewBase from './overview-base';

const Reports = () => {
  return (
    <Switch>
      <Route exact path={'/overview'}>
        <OverviewBase />
      </Route>
      <Redirect to={`/404`} />
    </Switch>
  );
};

export default Reports;
