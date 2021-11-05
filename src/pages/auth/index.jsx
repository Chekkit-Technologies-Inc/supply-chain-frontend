import React from 'react';
import ImageFadeIn from 'react-image-fade-in';
import { useHistory } from 'react-router-dom';
import { Route, Switch, useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

import supplyChain from '../../assets/supply-chain.jpeg';

import { Tabs, Panel } from '../../components/fragments/tabs';
import Text from '../../components/fragments/text';
import SignIn from './sign-in';
import SignUp from './sign-up';
import ResetPassword from './reset-password';
import UpdatePassword from './update-password';

const Auth = () => {
  const location = useLocation();
  // const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className='min-h-screen flex relative overflow-hidden'>
      <ImageFadeIn className='w-screen h-screen object-cover object-left' src={supplyChain} opacityTransition={1} />
      <div className={`bg-brand_blue absolute right-0 top-0 bottom-0 z-10 w-full xl:w-5/12 h-screen flex justify-center items-center`}>
        <div
          style={{ maxHeight: 'calc(100vh - 96px)' }}
          className={`w-full max-w-lg m-6 p-6 sm:m-12 sm:p-12 border border-brand_blue_light rounded-2xl transition_all overflow-auto no-scrollbar overflow-x-hidden`}
        >
          <Switch location={location}>
            <Route exact path={['/', '/auth', '/auth/signin', '/auth/signup']}>
              <Tabs>
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
          </Switch>
          <Route path={['/forgot-password', '/auth/forgot-password', '/reset-password', '/auth/reset-password']}>
            <div style={{ color: '#5f7d95' }} className={`text-center mt-6 sm:-mb-4`}>
              <Text onClick={() => history.push('/auth')} className={`cursor-pointer hover:text-green-300 inline-block`} value={`Sign In`} />
            </div>
          </Route>
        </div>
      </div>
    </div>
  );
};

export default Auth;
