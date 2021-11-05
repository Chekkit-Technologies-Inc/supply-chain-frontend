import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';

import IndexPage from './pages';
import Auth from './pages/auth';
import VerifyAcount from './pages/auth/verify-acount';
import SetUp from './pages/setup';
import Base from './components/layout/base';
import StickerPrintSuccess from './pages/dashboard/onboarding/sticker-print-success';
import NotFound from './pages/404-page';

import { UserActions } from './states/actions';
import { notify } from './states/actions/response';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const response = useSelector(state => state.response);

  React.useEffect(() => {
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
        <Route
          exact
          path={[
            '/auth',
            '/auth/signin',
            '/auth/signup',
            '/forgot-password',
            '/auth/forgot-password',
            '/reset-password',
            '/auth/reset-password',
            '/reset-password/:token',
            '/auth/reset-password/:token',
          ]}
        >
          <Auth />
        </Route>
        <Route exact path={['/verify-account/:token', '/auth/verify-account/:token', '/auth/verify-account', '/verify-account']}>
          <VerifyAcount />
        </Route>
        <Route path={'/setup'}>
          <SetUp />
        </Route>
        <Route path={'/onboarding/sticker-id-success'}>
          <StickerPrintSuccess />
        </Route>
        <Route path={['/onboarding', '/dashboard', '/assets', '/field-configuration', '/survey-rewards', '/reports', '/finances', '/settings']}>
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

// '/onboarding/get-started',
//             '/onboarding/upload-assets',
//             '/onboarding/uploaded-assets',
//             '/onboarding/setup-stickers',
//             '/onboarding/create-survey',
//             '/onboarding/create-survey/survey-edit',
//             '/onboarding/create-survey/survey-preview',
//             '/onboarding/embed-info',
//             '/onboarding/generate-code',
//             '/onboarding/onboarding-success',
//             '/onboarding/post-onboard',
//             '/onboarding/onboarded-assets',

export default App;