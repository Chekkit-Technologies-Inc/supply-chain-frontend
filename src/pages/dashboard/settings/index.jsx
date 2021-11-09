import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';

const Settings = () => {
  return (
    <Switch>
      <Route exact path={'/settings'}>
        <FadeIn>
          <div className={`font-bold text-4xl text-brand_blue text-center p-16`}>Settings</div>
        </FadeIn>
      </Route>
      <Redirect to={`/404`} />
    </Switch>
  );
};

export default Settings;
