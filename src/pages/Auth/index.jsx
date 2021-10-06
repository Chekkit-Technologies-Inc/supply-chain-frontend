import React from 'react';

import assetManagement from '../../assets/asset-mmm.jpeg';

import { Tabs, Panel } from '../../components/fragments/tabs';
import Login from './login';
import SignUp from './sign-up';

const Auth = () => {
  return (
    <div className='min-h-screen flex relative overflow-hidden'>
      <img src={assetManagement} className='w-screen h-screen object-cover object-left' alt='asset management' />

      <div className={`bg-brand_blue absolute right-0 top-0 bottom-0 z-10 w-full xl:w-5/12 h-screen flex justify-center items-center`}>
        <div
          style={{ maxHeight: 'calc(100vh - 96px)' }}
          className={`w-full max-h-screen max-w-lg m-6 p-6 sm:m-12 sm:p-12 border border-brand_blue_light rounded-2xl transition_all overflow-auto no-scrollbar overflow-x-hidden`}
        >
          <Tabs>
            <Panel title={'Log In'}>
              <Login />
            </Panel>
            <Panel title={'Sign Up'}>
              <SignUp />
            </Panel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Auth;
