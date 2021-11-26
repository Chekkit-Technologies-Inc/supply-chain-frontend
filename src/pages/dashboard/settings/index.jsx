import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SettingsBase from './settings-base';
import UserManagement from './user-management';

const Settings = () => {
  return (
    <Switch>
      <Route exact path={'/settings'}>
        <SettingsBase />
      </Route>
      <Route exact path={'/settings/user-management'}>
        <UserManagement />
      </Route>
      <Redirect to={`/404`} />
    </Switch>
  );
};

export default Settings;
