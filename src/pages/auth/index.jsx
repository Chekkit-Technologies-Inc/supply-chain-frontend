import React from 'react';
import { useHistory } from 'react-router-dom';
import { Route, Switch, useLocation } from 'react-router-dom';

import { Tabs, Panel } from '../../components/fragments/tabs';
import Text from '../../components/fragments/text';
import SignIn from './sign-in';
import SignUp from './sign-up';
import ResetPassword from './reset-password';
import UpdatePassword from './update-password';
import AcceptInvite from './accept-invite';

const Auth = () => {
  const location = useLocation();

  const history = useHistory();
  return (
    <div className='min-h-screen flex relative overflow-hidden bg-dash '>
      <div className={`h-screen ml-24 hidden xl:flex justify-center items-center`}>
        <h1>
          <div onClick={() => history.push('/')} className={`font-extrabold text-7xl text-brand_green slate cursor-pointer`}>
            Chekkit
          </div>
          <div className={`font-extrabold text-7xl text-brand_blue mt-4`}>Supply Chain</div>
        </h1>
      </div>
      <div className={`absolute right-0 top-0 bottom-0 z-10 w-full xl:w-5/12 h-screen flex justify-center items-center`}>
        <div
          style={{ maxHeight: 'calc(100vh - 96px)' }}
          className={`w-full max-w-lg m-6 p-6 sm:m-12 sm:p-12 shadow rounded-2xl transition_all overflow-auto no-scrollbar overflow-x-hidden bg-white`}
        >
          <Switch location={location}>
            <Route exact path={['/', '/auth', '/auth/signin', '/auth/signup/:companyIdentifier', '/auth/signup']}>
              <Tabs variant={true} current={location.pathname === '/auth/signin' ? 0 : 1}>
                <Panel title={'Sign In'}>
                  <SignIn />
                </Panel>
                <Panel title={'Sign Up'}>
                  <SignUp />
                </Panel>
              </Tabs>
            </Route>
            <Route path={['/forgot-password', '/auth/forgot-password']}>
              <ResetPassword />
            </Route>
            <Route path={['/reset-password/:token', '/auth/reset-password/:token', '/auth/reset-password', '/reset-password']}>
              <UpdatePassword />
            </Route>
            <Route path={['/user-invite/:token', '/auth/user-invite/:token', '/auth/user-invite', '/user-invite']}>
              <AcceptInvite />
            </Route>
          </Switch>
          <Route path={['/forgot-password', '/auth/forgot-password', '/reset-password', '/auth/reset-password']}>
            <div style={{ color: '#5f7d95' }} className={`text-center mt-6 sm:-mb-4`}>
              <Text onClick={() => history.push('/auth/signin')} className={`cursor-pointer hover:text-green-300 inline-block`} value={`Sign In`} />
            </div>
          </Route>
        </div>
      </div>
    </div>
  );
};

export default Auth;
