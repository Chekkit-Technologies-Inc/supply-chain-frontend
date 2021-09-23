import { Route } from 'react-router-dom';

import Home from '../../pages/dashboard/home';
import Assets from '../../pages/dashboard/assets'
import FieldConfigurations from '../../pages/dashboard/field-configuration'
import SurveyRewards from '../../pages/dashboard/survey-rewards'
import Reports from '../../pages/dashboard/reports'
import ViewInsights from '../../pages/dashboard/view-insights'
import Settings from '../../pages/dashboard/settings'


function Content() {
  return (
    <>

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

      <Route exact path={'/view-insights'}>
        <ViewInsights />
      </Route>

      <Route exact path={'/settings'}>
        <Settings />
      </Route>

    </>
  );
}

export default Content;
