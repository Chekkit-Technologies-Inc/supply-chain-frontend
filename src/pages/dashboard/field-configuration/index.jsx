import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import GetStarted from './get-started';
import SetupSite from './setup-site';
import MapPreview from './map-preview';
import MoveAssets from './move-assets';
import GenerateCode from './generate-code';
import MySites from './my-sites';
import MyWarehouses from './my-warehouses';

const FieldConfiguration = () => {
  return (
    <Switch>
      <Route exact path={'/field-configuration'}>
        <GetStarted />
      </Route>
      <Route exact path={'/field-configuration/sites/add-site'}>
        <SetupSite />
      </Route>
      <Route exact path={'/field-configuration/sites/map-preview'}>
        <MapPreview />
      </Route>
      <Route exact path={'/field-configuration/sites/move-sites'}>
        <MoveAssets />
      </Route>
      <Route exact path={'/field-configuration/sites/generate-code'}>
        <GenerateCode />
      </Route>
      <Route exact path={'/field-configuration/my-sites'}>
        <MySites />
      </Route>
      <Route exact path={'/field-configuration/my-warehouses'}>
        <MyWarehouses />
      </Route>
      <Redirect to={`/404`} />
    </Switch>
  );
};

export default FieldConfiguration;
