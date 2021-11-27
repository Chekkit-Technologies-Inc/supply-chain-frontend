import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';

import IndexPage from './pages';
import PickModules from './pages/pick-modules';
import Auth from './pages/auth';
import VerifyAcount from './pages/auth/verify-acount';
import Base from './components/layout/base';
import NotFound from './pages/404-page';

import { UserActions } from './states/actions';
import { notify } from './states/actions/response';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const response = useSelector(state => state.response);

  useEffect(() => {
    let token = localStorage.getItem('chekkit-act');
    if (token) {
      dispatch(UserActions.updateUser({ token }));
    } // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (response.type) {
      let msg = '';
      if (typeof response.message === 'string') {
        msg = response.message;
      } else {
        response.message.forEach(msg => {
          Object.keys(msg).forEach(key => {
            let str = `${key} Error`;
            let title = str.charAt(0).toUpperCase() + str.slice(1);
            let message = msg[key];
            showNotification(response, message, title);
          });
        });
        return;
      }
      showNotification(response, msg);
    } // eslint-disable-next-line
  }, [response]);

  const showNotification = (response, message, title) => {
    store.addNotification({
      message: message,
      type: response.type,
      title: title ? title : response.title,
      insert: 'top',
      container: 'top-right',
      dismiss: {
        duration: 2000,
        onScreen: true,
        pauseOnHover: true,
        showIcon: true,
      },
      onRemoval: () => {
        let timer;
        (() => {
          clearTimeout(timer);
          timer = setTimeout(() => {
            dispatch(notify({ title: '', message: '', type: '', loading: false }));
          }, 2000);
        })();
      },
    });
  };

  return (
    <>
      <ReactNotification isMobile={true} />
      <Switch location={location}>
        <Route exact path={'/'}>
          <IndexPage />
        </Route>
        <Route exact path={'/pick-modules'}>
          <PickModules />
        </Route>
        <Route
          exact
          path={[
            '/auth',
            '/auth/signin',
            '/auth/signup',
            '/auth/signup/:companyIdentifier',
            '/forgot-password',
            '/auth/forgot-password',
            '/reset-password',
            '/auth/reset-password',
            '/reset-password/:token',
            '/auth/reset-password/:token',
            '/user-invite/:token',
            '/auth/user-invite/:token',
            '/auth/user-invite',
            '/user-invite',
          ]}
        >
          <Auth />
        </Route>
        <Route exact path={['/verify-account/:token', '/auth/verify-account/:token', '/auth/verify-account', '/verify-account']}>
          <VerifyAcount />
        </Route>
        <Route path={['/overview', '/asset-management', '/connect-plus', '/consumer-intelligence', '/retail-pos', '/engage', '/reports', '/settings']}>
          <Base />
        </Route>
        <Route
          render={() => {
            return (
              <div className={`bg`}>
                <NotFound />;
              </div>
            );
          }}
        />
      </Switch>
    </>
  );
}

export default App;
