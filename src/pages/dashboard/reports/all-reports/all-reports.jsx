import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

import Heading from '../../../../components/fragments/heading';
// import Button from '../../../../components/fragments/button';
// import SelectBox from '../../../../components/fragments/select-box';

const AllReports = () => {
  return (
    <FadeIn
      className={`flex flex-col justify-start items-center
     space-y-2 p-6 py-16 min-h-screen w-full mx-auto `}
    >
      <Heading className={`text-brand_blue font-semibold`} title={`Hello Sam, welcome to your account`} />
      <Heading className={`text-brand_blue`} title={`What will you like to do today`} size={2} />
    </FadeIn>
  );
};

export default AllReports;
