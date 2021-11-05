import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

import Heading from '../../../../components/fragments/heading';
import Button from '../../../../components/fragments/button';
import SelectBox from '../../../../components/fragments/select-box';

const AllReports = () => {
  return (
    <FadeIn
      className={`flex flex-col justify-start
     space-y-12 p-6 py-16 min-h-screen w-full mx-auto bg-white`}
    >
      <Heading className={`text-brand_blue font-semibold`} title={`Reports`} />
      <div className={`flex flex-col space-y-4 xl:space-y-0 xl:flex-row items-center justify-between space-x-4`}>
        <div className={`flex items-center space-x-12`}>
          <Heading className={`text-brand_blue font-semibold`} title={`Report On Assets`} size={3} />
        </div>
        <div className={`flex items-center space-x-6`}>
          <SelectBox options={['This Month']} variant={3} value={`This Month`} />
          <Button className={`flex-shrink-0`} text={`Download Report`} />
        </div>
      </div>

      <div className={`flex flex-col space-y-4 xl:space-y-0 xl:flex-row items-center justify-between space-x-4`}>
        <div className={`flex items-center space-x-12`}>
          <Heading className={`text-brand_blue font-semibold`} title={`Report On Hardware`} size={3} />
        </div>
        <div className={`flex items-center space-x-6`}>
          <SelectBox options={['This Month']} variant={3} value={`This Month`} />
          <Button className={`flex-shrink-0`} text={`Download Report`} />
        </div>
      </div>
    </FadeIn>
  );
};

export default AllReports;
