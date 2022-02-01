import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useSelector } from 'react-redux';
import ImageFadeIn from 'react-image-fade-in';
import { useHistory } from 'react-router-dom';

import Connect from '../../../../assets/connect-plus.png';

import Button from '../../../../components/fragments/button';

const CPBase = () => {
  const user = useSelector(state => state.user);
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
        <div className='text-brand_blue text-2xl font-medium'>
          <span>Hello </span>
          <span>{`${user.name.split(' ')[0]}`}, </span>
          <span>welcome to Connect Plus</span>
        </div>
        <ImageFadeIn src={Connect} className='w-80' />
        <div className='text-brand_blue_light max-w-3xl'>
          This page is blank because you do not have any activity on this tool yet. Summary of your activities on asset management, insights on surveys and
          connections show up here.
        </div>
        <Button text={`Request Product`} />
      </FadeIn>
    </div>
  );
};

export default CPBase;
