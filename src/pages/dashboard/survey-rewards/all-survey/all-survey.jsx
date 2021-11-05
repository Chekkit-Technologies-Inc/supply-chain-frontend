import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

import Heading from '../../../../components/fragments/heading';
import Button from '../../../../components/fragments/button';

const AllSurvey = () => {
  return (
    <FadeIn
      className={`flex flex-col justify-start
     space-y-12 p-6 py-16 min-h-screen w-full mx-auto bg-white`}
    >
      <Heading className={`text-brand_blue font-semibold`} title={`Surveys`} />
      <div className={`flex flex-col space-y-4 xl:space-y-0 xl:flex-row items-center justify-between space-x-4`}>
        <div className={`flex items-center space-x-12`}>
          <Heading className={`text-brand_blue font-semibold`} title={`Manage Surveys`} size={3} />
        </div>
        <div className={`flex items-center space-x-6`}>
          <Button className={`flex-shrink-0`} text={`View Rewards`} type={`secondary`} />
          <Button className={`flex-shrink-0`} text={`Create Survey`} />
        </div>
      </div>
    </FadeIn>
  );
};

export default AllSurvey;
