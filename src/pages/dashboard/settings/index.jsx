import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SettingsBase from './settings-base';
import HelpBase from './help';
import ContactChekkit from './contact-chekkit';
import UserManagement from './user-management';

const Settings = () => {
  const user = useSelector(state => state.user);
  return (
    <Switch>
      <Route exact path={'/settings'}>
        <SettingsBase />
      </Route>
      <Route exact path={'/settings/help'}>
        <HelpBase />
      </Route>
      <Route exact path={'/settings/contact-chekkit'}>
        <ContactChekkit />
      </Route>
      <Route exact path={'/settings/user-management'}>
        {user?.company?.subscription?.status ? <UserManagement /> : <Redirect to={'/plans'} />}
      </Route>
      <Redirect to={`/404`} />
    </Switch>
  );
};

export default Settings;
