import { Route } from 'react-router-dom';

import Auth from './pages/Auth';
import SetUp from './pages/SetUp';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Route exact path={['/', '/auth']}>
        <Auth />
      </Route>

      <Route exact path={'/setup'}>
        <SetUp />
      </Route>

      <Route exact path={['/dashboard', '/assets', '/field-configuration', '/survey-rewards', '/reports', '/view-insights', '/settings']}>
        <Dashboard />
      </Route>
    </>
  );
}

export default App;
