import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useHistory } from 'react-router-dom';

const HelpBase = () => {
  const history = useHistory();
  return (
    <FadeIn className='bg p-4 md:px-12 py-16 min-h-screen w-full'>
      <div className='text-sm text-brand_blue mb-6 -mt-6'>
        <span onClick={() => history.push('/home')} className='text-brand_blue_light cursor-pointer'>
          Main menu{' '}
        </span>
        <span className='text-brand_blue_light'>| </span>
        <span onClick={() => history.push('/settings')} className='text-brand_blue_light cursor-pointer'>
          Settings
        </span>
        <span className='text-brand_blue_light'> | </span>
        <span onClick={() => history.push('/settings/help')} className='text-blue-500 cursor-pointer'>
          Help
        </span>
      </div>
      <div className='text-2xl text-brand_blue mb-12'>Help</div>
    </FadeIn>
  );
};

export default HelpBase;
