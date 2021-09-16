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

      <Route exact path={'/dashboard'}>
        <Dashboard />
      </Route>
    </>
  );
}

export default App;
