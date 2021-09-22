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

      <Route exact path={'/dashboard'}>
        <Home />
      </Route>

      <Route exact path={'/assets'}>
        <Assets />
      </Route>

      <Route exact path={'/field-configuration'}>
        <FieldConfigurations />
      </Route>

      <Route exact path={'/survey-rewards'}>
        <SurveyRewards />
      </Route>

      <Route exact path={'/reports'}>
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
