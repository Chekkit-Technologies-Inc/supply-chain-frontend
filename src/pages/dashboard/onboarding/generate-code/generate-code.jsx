import React from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ImageFadeIn from 'react-image-fade-in';

import barcode from '../../../../assets/barcode1.png';
import Button from '../../../../components/fragments/button';

const GenerateCode = () => {
  const history = useHistory();
  return (
    <FadeIn className='w-full py-12 md:py-32 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center min-h-screen bg-dots'>
      <div className={`flex flex-col justify-center items-center p-4 w-full max-w-5xl space-y-10 `}>
        <div className={`p-10 rounded-xl bg-brand_blue w-full max-w-5xl space-y-8 text-gray-100`}>
          <div className={`font-semibold text-center`}>Generate Data Matrix Code</div>
          <div className={`flex items-center justify-center`}>
            <ImageFadeIn width={250} src={barcode} alt='barcode' />
          </div>
          <div className={`space-y-2 w-64 mx-auto font-bold`}>
            <div className={`flex items-center justify-start`}>
              <span className={`text-gray-400 mr-2`}>Lot Number</span>
              <span>02861083629</span>
            </div>
            <div className={`flex items-center justify-start`}>
              <span className={`text-gray-400 mr-2`}>Serial Number</span>
              <span>02861083629</span>
            </div>
          </div>
        </div>

        <div className={`flex flex-col w-full max-w-5xl space-y-6 lg:flex-row lg:space-y-0 lg:space-x-12  justify-center`}>
          <Button text={`Back`} type={`secondary`} onClick={() => history.goBack()} />
          <Button text={`Generate Data Matric Code`} onClick={() => history.push('/onboarding/onboarding-success')} />
        </div>
      </div>
    </FadeIn>
  );
};

export default GenerateCode;
