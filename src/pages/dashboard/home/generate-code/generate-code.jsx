import React from 'react';
import { useHistory } from 'react-router-dom';

import barcode from '../../../../assets/barcode1.png';
import Button from '../../../../components/fragments/button';

const GenerateCode = () => {
  const history = useHistory();
  return (
    <div className='w-full py-12 md:py-32 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-start bg-dots'>
      <div className={`flex flex-col justify-center items-center p-4 w-full max-w-3xl space-y-10`}>
        <div className={`p-10 rounded-xl bg-brand_blue max-w-lg w-full space-y-8 text-gray-100`}>
          <div className={`font-semibold text-center`}>Generate Data Matrix Code</div>
          <div className={`flex items-center justify-center`}>
            <img width={250} src={barcode} alt='barcode' />
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

        <div className={`flex space-x-4 md:space-x-8 justify-center`}>
          <Button text={`Back`} type={`secondary`} onClick={() => history.goBack()} />
          <Button text={`Generate Data Matric Code`} onClick={() => history.push('/dashboard/onboarding-success')} />
        </div>
      </div>
    </div>
  );
};

export default GenerateCode;
