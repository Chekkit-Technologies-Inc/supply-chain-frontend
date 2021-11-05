import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import OnboaardingSteps from './onboaarding-steps';

const Home = () => {
  return (
    <Switch>
      <Route exact path={'/dashboard'}>
        <OnboaardingSteps />
      </Route>
      <Redirect to={`/404`} />
    </Switch>
  );
};

export default Home;
