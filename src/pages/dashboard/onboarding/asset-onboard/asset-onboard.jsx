import React from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import { ReactComponent as Truck } from '../../../../assets/truck.svg';

import Heading from '../../../../components/fragments/heading';
import Text from '../../../../components/fragments/text';
import Button from '../../../../components/fragments/button';

const AssetOnboard = () => {
  const history = useHistory();

  return (
    <div className='w-full h-full py-12 px-4 sm:px-6 md:px-8'>
      <FadeIn className={`w-full h-full flex justify-center items-center max-w-4xl mx-auto space-x-6`}>
        <div className={`flex-1 flex flex-col justify-center items-start space-y-6`}>
          <Heading className={`font-medium`} title={`Let's Get You Started`} />
          <Text value={`Hi Akin, welcome to your dashboard. To get started lets onboard the assets you have in your warehouse.`} />
          <Button className={`w-52`} text={`Get Started`} onClick={() => history.push('/onboarding/get-started')} />
        </div>
        <div className={`hidden flex-1 lg:flex flex-col justify-center items-center p-6`}>
          <Truck className={`h-96 w-96`} />
        </div>
      </FadeIn>
    </div>
  );
};

export default AssetOnboard;
