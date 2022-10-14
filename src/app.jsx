import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation, useHistory, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import { CgSpinner } from 'react-icons/cg';
import runOneSignal from './runOneSignal';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';

import IndexPage from './pages';
import PickModules from './pages/pick-modules';
import Plans from './pages/plans';
import Auth from './pages/auth';
import VerifyAcount from './pages/auth/verify-acount';
import Base from './components/layout/base';
import NotFound from './pages/404-page';

import { UserActions, PlanActions } from './states/actions';
import { notify } from './states/actions/response';

function App() {
  const user = useSelector(state => state.user);
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const response = useSelector(state => state.response);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    // const appInsights = new ApplicationInsights({
    //   config: {
    //     // connectionString: process.env.REACT_APP_CONNECT_STRING,
    //     connectionString:
    //       'InstrumentationKey=01667578-0def-4cdd-a366-d9b748aef3ae;IngestionEndpoint=https://westeurope-5.in.applicationinsights.azure.com/;LiveEndpoint=https://westeurope.livediagnostics.monitor.azure.com/',
    //     /* ...Other Configuration Options... */
    //   },
    // });
    // console.log('appInsights', appInsights);
    // appInsights.loadAppInsights();
    // appInsights.trackPageView();
    let reactPlugin = new ReactPlugin();
    let appInsights = new ApplicationInsights({
      config: {
        instrumentationKey: '96272af3-f429-4f81-9822-ab2d339fd184',
        enableAutoRouteTracking: true,
        extensions: [reactPlugin],
      },
    });
    appInsights.loadAppInsights();
  }, []);

  useEffect(() => {
    if (user?.id) {
      console.log('updates here');
      if (!window.OneSignal) {
        runOneSignal(user?.company?.id);
      }
    }
    // eslint-disable-next-line
  }, [user?.id]);

  useEffect(() => {
    let token = localStorage.getItem('chekkit-act');
    if (token) {
      dispatch(UserActions.updateUser({ token }));
    } else if (location.pathname.length > 200) {
      setUserLoading(false);
    } else {
      setUserLoading(false);
      history.push(location.pathname);
    } // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (user?.token) {
      dispatch(UserActions.fetchUser())
        .then(res => {
          setUserLoading(false);
          history.push(location.pathname);
        })
        .catch(err => {
          setUserLoading(false);
          localStorage.removeItem('chekkit-act');
          // dispatch(UserActions.updateUser({ token: '' }));
          // history.push('/');
        });
      dispatch(UserActions.getUsersRoles());
      dispatch(UserActions.getCompanyUsers());
      dispatch(UserActions.getCompanyPermissions());
      dispatch(PlanActions.fetchPlans());
    }
    // eslint-disable-next-line
  }, [user?.token]);

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
      {userLoading && (
        <div className={`absolute top-0 bottom-0 left-0 right-0 z-20 flex justify-center items-center`}>
          <CgSpinner className={`text-brand_blue animate-spin`} size={64} />
        </div>
      )}
      {!userLoading && (
        <Switch location={location}>
          <Route exact path={'/'}>
            <IndexPage />
          </Route>
          <Route exact path={'/pick-modules'}>
            <PickModules />
          </Route>
          <Route exact path={'/plans'}>
            <>{user?.isAuthorized ? <Plans /> : <Redirect to={'/auth/signin'} />}</>
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
          <Route path={['/home', '/overview', '/settings']}>{user?.isAuthorized ? <Base /> : <Redirect to={'/auth/signin'} />}</Route>

          <Route path={['/asset-management', '/connect-plus', '/retail-pos', '/reports']}>
            {user?.isAuthorized ? <>{user?.company?.subscription?.status ? <Base /> : <Redirect to={'/plans'} />}</> : <Redirect to={'/auth/signin'} />}
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
      )}
    </>
  );
}

export default App;
