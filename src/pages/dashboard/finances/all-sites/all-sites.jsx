import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useSelector } from 'react-redux';

import SelectBox from '../../../../components/fragments/select-box';
import Heading from '../../../../components/fragments/heading';
import FinancesMap from '../../../../components/fragments/finances-map';

const AllSites = () => {
  const sites = useSelector(state => state.sites);

  return (
    <FadeIn
      className={`flex flex-col justify-start
     space-y-6 p-6 py-16 min-h-screen w-full mx-auto bg-white`}
    >
      <div className={`flex flex-col space-y-4 xl:space-y-0 xl:flex-row items-center justify-between space-x-4`}>
        <Heading className={`font-medium`} title={`Finances`} />
        <div className={`flex items-center space-x-6`}>
          <SelectBox options={['All Sites']} variant={3} value={`All Sites`} />
        </div>
      </div>
      <FinancesMap sites={sites} />
    </FadeIn>
  );
};

export default AllSites;
