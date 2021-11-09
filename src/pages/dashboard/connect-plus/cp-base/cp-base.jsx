import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

// import Heading from '../../../../components/fragments/heading';
// import Button from '../../../../components/fragments/button';
// import SelectBox from '../../../../components/fragments/select-box';

const CPBase = () => {
  return (
    <FadeIn
      className={`flex flex-col justify-start items-center
     space-y-2 p-6 py-16 min-h-screen w-full mx-auto `}
    >
      <div className={`font-bold text-4xl text-brand_blue text-center`}>Connect++</div>
    </FadeIn>
  );
};

export default CPBase;
