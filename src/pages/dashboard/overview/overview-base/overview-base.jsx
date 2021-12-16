import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useSelector } from 'react-redux';

import Heading from '../../../../components/fragments/heading';

const OverviewBase = () => {
  const user = useSelector(state => state.user);
  return (
    <FadeIn
      className={`flex flex-col justify-start items-center
     space-y-2 p-6 py-16 min-h-screen w-full mx-auto `}
    >
      {user && (
        <>
          <Heading className={`text-brand_blue font-semibold text-center capitalize`} title={`Hello ${user.name.split(' ')[0]}, welcome to your account`} />
          <Heading className={`text-brand_blue text-center`} title={`What will you like to do today`} size={2} />
        </>
      )}
    </FadeIn>
  );
};

export default OverviewBase;
