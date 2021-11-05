import React from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ImageFadeIn from 'react-image-fade-in';

import finance from '../../../../assets/hand-asset.png';

import Heading from '../../../../components/fragments/heading';
import Text from '../../../../components/fragments/text';
import Button from '../../../../components/fragments/button';
import InputBox from '../../../../components/fragments/input-box';

const GetStarted = () => {
  const history = useHistory();

  return (
    <FadeIn className='w-full h-full py-12 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-900 bg-opacity-60 flex flex-col justify-center space-y-16'>
      <ImageFadeIn className={`mx-auto`} src={finance} alt='finance' />
      <Heading className={`text-center text-white`} title={`What Type Of Assets Will You Be Onboarding?`} />
      <div className='space-y-6 w-full flex flex-col justify-center items-center'>
        <InputBox className={`max-w-xl`} variant={1} placeholder={`e.g. Batteries, fridge, cement`} />
        <div className={`w-full max-w-xl text-right`}>
          <Text className={`text-white cursor-pointer underline`} value={`+ add more assets`} />
        </div>
        <Button className={`w-60`} text={`Save & Continue`} light={true} onClick={() => history.push('/onboarding/upload-assets')} />
      </div>
    </FadeIn>
  );
};

export default GetStarted;
