import { Route, Switch } from 'react-router-dom';

import Home from '../../pages/dashboard/home';
import Overview from '../../pages/dashboard/overview';
import AssetManagement from '../../pages/dashboard/asset-management';
import ConnectPlus from '../../pages/dashboard/connect-plus';
import RetailPOS from '../../pages/dashboard/retail-pos';
import Settings from '../../pages/dashboard/settings';

function Content() {
  return (
    <Switch exitBeforeEnter initial={false}>
      <Route path={'/home'}>
        <Home />
      </Route>

      <Route path={'/overview'}>
        <Overview />
      </Route>

      <Route path={'/asset-management'}>
        <AssetManagement />
      </Route>

      <Route path={'/connect-plus'}>
        <ConnectPlus />
      </Route>

      <Route path={'/retail-pos'}>
        <RetailPOS />
      </Route>

      <Route path={'/settings'}>
        <Settings />
      </Route>
    </Switch>
  );
}

export default Content;
