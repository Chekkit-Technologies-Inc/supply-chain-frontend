import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import truck from '../../../../assets/truck.svg';
import finance from '../../../../assets/hand-asset.png';

import Heading from '../../../../components/fragments/heading';
import Text from '../../../../components/fragments/text';
import Button from '../../../../components/fragments/button';
import InputBox from '../../../../components/fragments/input-box';

const AssetOnboard = () => {
  const history = useHistory();
  const [showFlow, setShowFlow] = useState(false);
  return (
    <>
      {!showFlow && (
        <div className='w-full h-full py-12 px-4 sm:px-6 md:px-8'>
          <div className={`w-full h-full flex justify-center items-center max-w-4xl mx-auto space-x-6`}>
            <div className={`flex-1 flex flex-col justify-center items-start space-y-6`}>
              <Heading className={`font-medium`} title={`Let's Get You Started`} />
              <Text value={`Hi Akin, welcome to your dashboard. To get started lets onboard the assets you have in your warehouse.`} />
              <Button className={`w-52`} text={`Get Started`} onClick={() => setShowFlow(true)} />
            </div>
            <div className={`hidden flex-1 lg:flex flex-col justify-center items-center p-6`}>
              <img className={`w-full max-w-sm`} src={truck} alt='truck' />
            </div>
          </div>
        </div>
      )}
      {showFlow && (
        <div className='w-full h-full py-12 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-900 bg-opacity-60 flex flex-col items-center justify-center space-y-16'>
          <img src={finance} alt='finance' />
          <Heading className={`text-center text-white`} title={`What Type Of Assets Will You Be Onboarding?`} />
          <div className='space-y-6 w-full flex flex-col justify-center items-center'>
            <InputBox className={`max-w-xl`} variant={1} placeholder={`e.g. Batteries, fridge, cement`} />
            <div className={`w-full max-w-xl text-right`}>
              <Text className={`text-white cursor-pointer underline`} value={`+ add more assets`} />
            </div>
            <Button className={`w-60`} text={`Save & Continue`} light={true} onClick={() => history.push('/dashboard/upload-assets')} />
          </div>
        </div>
      )}
    </>
  );
};

export default AssetOnboard;
