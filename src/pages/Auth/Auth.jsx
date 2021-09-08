import React from 'react';

import bg from '../../assets/asset-mm.png';

import { Tabs, Panel } from '../../components/fragments/Tabs';

const Auth = () => {
  return (
    <div className='min-h-screen flex relative'>
      <img src={bg} className='w-screen h-screen object-cover object-left' alt='asset management' />

      <div className={`bg-brand_blue absolute right-0 top-0 bottom-0 z-10 w-full lg:w-5/12 h-screen flex justify-center items-center`}>
        <div className={`w-full max-w-md m-12 p-12 border border-brand_blue_light rounded-2xl`}>
          <Tabs>
            <Panel title={'Log In'}>Hello 1</Panel>
            <Panel title={'Sign Up'}>Hello 2</Panel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Auth;
