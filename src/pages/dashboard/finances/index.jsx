import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AllSites from './all-sites';
import SiteFinance from './site-finance';

const Finances = () => {
  return (
    <Switch>
      <Route exact path={'/finances'}>
        <AllSites />
      </Route>
      <Route exact path={'/finances/sites/:site_id'}>
        <SiteFinance />
      </Route>
      <Redirect to={`/404`} />
    </Switch>
  );
};

export default Finances;
