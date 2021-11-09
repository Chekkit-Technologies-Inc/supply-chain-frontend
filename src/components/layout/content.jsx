import { Route, Switch } from 'react-router-dom';

import Reports from '../../pages/dashboard/reports';
import Settings from '../../pages/dashboard/settings';

function Content() {
  return (
    <Switch exitBeforeEnter initial={false}>
      <Route path={'/overview'}>
        <Reports />
      </Route>

      <Route path={'/settings'}>
        <Settings />
      </Route>
    </Switch>
  );
}

export default Content;
