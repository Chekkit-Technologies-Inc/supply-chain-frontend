import { Route } from 'react-router-dom';

import Auth from './pages/Auth';
import SetUp from './pages/SetUp';
import Base from './components/layout/Base';

function App() {
  return (
    <>
      <Route exact path={['/', '/auth']}>
        <Auth />
      </Route>

      <Route exact path={'/setup'}>
        <SetUp />
      </Route>

      <Route path={['/dashboard', '/assets', '/field-configuration', '/survey-rewards', '/reports', '/view-insights', '/finance', '/settings']}>
        <Base />
      </Route>
    </>
  );
}

export default App;
