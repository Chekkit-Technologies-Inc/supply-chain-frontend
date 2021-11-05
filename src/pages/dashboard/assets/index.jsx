import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AllAssets from './all-assets';
import AssetInfo from './asset_info';
import AssetVitals from './asset_vitals'

const Assets = () => {
  return (
    <Switch>
      <Route exact path={'/assets'}>
        <AllAssets />
      </Route>
      <Route exact path={'/assets/:asset_id'}>
        <AssetInfo />
      </Route>
      <Route exact path={'/assets/:asset_id/vitals'}>
        <AssetVitals />
      </Route>
      <Redirect to={`/404`} />
    </Switch>
  );
};

export default Assets;
