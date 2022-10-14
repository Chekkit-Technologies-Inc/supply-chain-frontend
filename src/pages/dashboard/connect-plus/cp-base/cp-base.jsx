import React, { useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
// import { useSelector } from 'react-redux';
import ImageFadeIn from 'react-image-fade-in';
import { useHistory } from 'react-router-dom';

import Connect from '../../../../assets/connect-plus.png';

// import Button from '../../../../components/fragments/button';
import Dialog from '../../../../components/fragments/dialog';

const CPBase = () => {
  const [open, setOpen] = useState(false);
  // const user = useSelector(state => state.user);
  const history = useHistory();

  return (
    <div className='bg p-4 md:px-12 py-16 min-h-screen w-full'>
      <div className='text-sm text-brand_blue mb-6 -mt-6'>
        <span onClick={() => history.push('/home')} className='text-brand_blue_light cursor-pointer'>
          Main menu{' '}
        </span>
        <span className='text-brand_blue_light'>| </span>
        <span onClick={() => history.push('/connect-plus')} className='text-blue-500 cursor-pointer'>
          Connect plus
        </span>
      </div>
      <div className='text-2xl text-brand_blue mb-12'>Connect Plus</div>
      <FadeIn
        className={`flex flex-col justify-start items-center
       space-y-12 mx-auto text-center`}
      >
        <div>
          <div className='text-brand_blue text-2xl font-medium'>Connect Plus</div>
          <div className='text-gray-500 text-sm '>Available soon</div>
        </div>
        <div className='w-80'>
          <ImageFadeIn src={Connect} className='w-full' />
        </div>
      </FadeIn>
      <Dialog open={open} setOpen={setOpen} title={`Notification sent`} type={`product-request`} />
    </div>
  );
};

export default CPBase;
