import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AllReports from './all-reports';

const Reports = () => {
  return (
    <Switch>
      <Route exact path={'/overview'}>
        <AllReports />
      </Route>
      <Redirect to={`/404`} />
    </Switch>
  );
};

export default Reports;
