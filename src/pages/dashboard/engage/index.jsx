import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import EngageBase from './engage-base';

const Reports = () => {
  return (
    <Switch>
      <Route exact path={'/engage'}>
        <EngageBase />
      </Route>
      <Redirect to={`/404`} />
    </Switch>
  );
};

export default Reports;
