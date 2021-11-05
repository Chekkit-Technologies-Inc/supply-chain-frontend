import { Route, Switch } from 'react-router-dom';

import Onboarding from '../../pages/dashboard/onboarding';
import Home from '../../pages/dashboard/home';
import Assets from '../../pages/dashboard/assets';
import FieldConfigurations from '../../pages/dashboard/field-configuration';
import SurveyRewards from '../../pages/dashboard/survey-rewards';
import Reports from '../../pages/dashboard/reports';
import Finances from '../../pages/dashboard/finances';
import Settings from '../../pages/dashboard/settings';

function Content() {
  return (
    <Switch exitBeforeEnter initial={false}>
      <Route path={'/onboarding'}>
        <Onboarding />
      </Route>

      <Route path={'/dashboard'}>
        <Home />
      </Route>

      <Route path={'/assets'}>
        <Assets />
      </Route>

      <Route path={'/field-configuration'}>
        <FieldConfigurations />
      </Route>

      <Route path={'/survey-rewards'}>
        <SurveyRewards />
      </Route>

      <Route path={'/reports'}>
        <Reports />
      </Route>

      <Route path={'/finances'}>
        <Finances />
      </Route>

      <Route path={'/settings'}>
        <Settings />
      </Route>
    </Switch>
  );
}

export default Content;
