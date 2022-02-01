import React from 'react';
import { useHistory } from 'react-router-dom';
import { Route, Switch, useLocation } from 'react-router-dom';

import {ReactComponent as Welcome} from '../../assets/auth-item.svg'
import Text from '../../components/fragments/text';
import SignIn from './sign-in';
import SignUp from './sign-up';
import ResetPassword from './reset-password';
import UpdatePassword from './update-password';
import AcceptInvite from './accept-invite';
import Logo from '../../components/fragments/logo';

const Auth = () => {
  const location = useLocation();

  const history = useHistory();
  return (
    <div className='min-h-screen relative bg-brand_blue'>

      <div className={`absolute left-20 top-0 hidden xl:block z-0`}>
        <Welcome />
      </div>

      <div className={`flex items-center justify-center xl:justify-start px-4 md:px-12 py-6 z-50 absolute top-0 left-0 right-0`}>
        <Logo size={170} dark={true} />
      </div>

      <div className='flex justify-end'>
      <div className={`w-full mb-6 p-6 pt-32 sm:p-12 sm:pt-32 lg:pr-24 transition_all overflow-auto no-scrollbar overflow-x-hidden mx-auto flex flex-col items-center justify-center xl:justify-end xl:items-end`}>
        <Switch location={location}>
          <Route exact path={['/auth/signup']}>
            <SignUp />
          </Route>
          <Route exact path={['/auth/signin']}>
            <SignIn />
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
          <div className={`text-center mt-6 sm:-mb-4 w-full max-w-md flex justify-center`}>
            <Text onClick={() => history.push('/auth/signin')} className={`cursor-pointer text-gray-100 hover:text-green-300 inline-block mx-auto text-center`} value={`Sign In`} />
          </div>
        </Route>
        </div>
      </div>
      </div>
  );
};

export default Auth;
