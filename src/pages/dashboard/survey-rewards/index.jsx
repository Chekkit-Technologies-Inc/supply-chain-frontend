import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AllSurvey from './all-survey';

const SurveyRewards = () => {
  return (
    <Switch>
      <Route exact path={'/survey-rewards'}>
        <AllSurvey />
      </Route>
      <Redirect to={`/404`} />
    </Switch>
  );
};

export default SurveyRewards;
