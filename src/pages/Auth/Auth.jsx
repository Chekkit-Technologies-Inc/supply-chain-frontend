import React from 'react';

import bg from '../../assets/asset-m.png';

import { Tabs, Panel } from '../../components/fragments/Tabs';
import Login from '../../components/fragments/Login';
import SignUp from '../../components/fragments/SignUp';

const Auth = () => {
  return (
    <div className='min-h-screen flex relative'>
      <img src={bg} className='w-screen h-screen object-cover object-left' alt='asset management' />

      <div className={`bg-brand_blue absolute right-0 top-0 bottom-0 z-10 w-full lg:w-5/12 h-screen flex justify-center items-center`}>
        <div className={`w-full max-w-md m-12 p-12 border border-brand_blue_light rounded-2xl`}>
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
