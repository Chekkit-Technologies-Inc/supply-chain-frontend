import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import RPBase from './rp-base';

const Reports = () => {
  return (
    <Switch>
      <Route exact path={'/retail-pos'}>
        <RPBase />
      </Route>
      <Redirect to={`/404`} />
    </Switch>
  );
};

export default Reports;
