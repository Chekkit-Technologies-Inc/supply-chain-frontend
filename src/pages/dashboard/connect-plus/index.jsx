import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import CPBase from './cp-base';

const Reports = () => {
  return (
    <Switch>
      <Route exact path={'/connect-plus'}>
        <CPBase />
      </Route>
      <Redirect to={`/404`} />
    </Switch>
  );
};

export default Reports;
