import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useSelector } from 'react-redux';
import ImageFadeIn from 'react-image-fade-in';

import Overview from '../../../../assets/overview.png';

const OverviewBase = () => {
  const user = useSelector(state => state.user);

  return (
    <FadeIn
      className={`flex flex-col justify-start items-center
     space-y-12 p-6 py-16 min-h-screen w-full mx-auto bg text-center`}
    >
      <div className='text-brand_blue text-2xl font-medium'>
        <span>Hello </span>
        <span>{`${user.name.split(' ')[0]}`}, </span>
        <span>welcome to your account overview</span>
      </div>
      <ImageFadeIn src={Overview} className='w-80' />
      <div className='text-brand_blue_light max-w-3xl'>
        This page is blank because you do not have any activity on this tool yet. Summary of your activities on asset management, insights on surveys and
        connections show up here.
      </div>
    </FadeIn>
  );
};

export default OverviewBase;
