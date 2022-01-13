import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

const HelpBase = () => {
  return (
    <FadeIn
      className={`flex flex-col justify-start
space-y-6 px-4 md:px-12 py-8 min-h-screen w-full `}
    >
      <div className={`font-bold text-2xl text-brand_blue`}>Help</div>
    </FadeIn>
  );
};

export default HelpBase;
