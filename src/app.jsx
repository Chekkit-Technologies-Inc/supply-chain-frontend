import { Route } from 'react-router-dom';

import Base from './components/layout/Base';
import ScrollTopTop from './hooks/ScrollToTop';

import Auth from './pages/Auth';
import SetUp from './pages/SetUp';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <ScrollTopTop>
      <Route exact path={['/', '/auth']}>
        <Base>
          <Auth />
        </Base>
      </Route>

      <Route exact path={'/setup'}>
        <Base>
          <SetUp />
        </Base>
      </Route>

      <Route exact path={'/dashboard'}>
        <Base>
          <Dashboard />
        </Base>
      </Route>
    </ScrollTopTop>
  );
}

export default App;
