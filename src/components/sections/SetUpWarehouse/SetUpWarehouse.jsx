import React from 'react';

import Heading from '../../fragments/Heading';
import Button from '../../fragments/Button';
import AddWarehouse from '../../fragments/AddWarehouse';

import { setupData as data } from '../../../appData';

const SetUpWarehouse = ({ onComplete }) => {
  return (
    <div className={`flex flex-col min-h-screen justify-center items-center space-y-6 p-6 max-w-4xl mx-auto`}>
      <Heading className={`font-medium text-center text-brand_blue`} title={data.setupWarehouse.title} size={2} />
      <AddWarehouse />
      <div className={`flex space-x-12 justify-center`}>
        <Button text={data.setupWarehouse.buttonText1} type={`secondary`} onClick={() => onComplete('backward')} />
        <Button text={data.setupWarehouse.buttonText2} onClick={() => onComplete('forward')} />
      </div>
    </div>
  );
};

export default SetUpWarehouse;
