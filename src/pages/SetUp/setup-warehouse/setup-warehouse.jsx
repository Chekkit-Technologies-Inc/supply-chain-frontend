import React, { useState, useRef } from 'react';

import Heading from '../../../components/fragments/heading';
import Button from '../../../components/fragments/button';
import AddWarehouse from '../../../components/fragments/add-warehouse';
import WarehouseMap from '../../../components/fragments/warehouse-map';

import { setupData as data } from '../../../app-data';

const SetUpWarehouse = ({ onComplete }) => {
  const steps = useRef(2);
  const [pos, setPos] = useState(0);

  const onProceed = dir => {
    if (dir === 'forward' && pos < steps.current - 1) {
      setPos(pos => pos + 1);
    }
    console.log(dir);

    if (dir === 'backward' && pos > 0) {
      setPos(pos => pos - 1);
    }
  };

  return (
    <>
      {pos === 0 && (
        <div className={`flex flex-col min-h-screen justify-center items-center space-y-6 p-6 pb-16 w-full mx-auto`}>
          <Heading className={`font-medium text-center text-brand_blue`} title={data.setupWarehouse.title} size={2} />
          <AddWarehouse />
          <div className={`flex space-x-4 md:space-x-12  justify-center`}>
            <Button text={data.setupWarehouse.buttonText1} type={`secondary`} onClick={() => onComplete('backward')} />
            <Button text={data.setupWarehouse.buttonText2} onClick={() => onProceed('forward')} />
          </div>
        </div>
      )}
      {pos === 1 && (
        <div className={`flex flex-col justify-center items-center space-y-6 p-6 pb-16 min-h-screen w-full mx-auto`}>
          <Heading className={`font-medium text-center text-brand_blue`} title={data.wareHouseMap.title} size={2} />
          <WarehouseMap />
          <div className={`flex space-x-4 md:space-x-12 justify-center`}>
            <Button text={data.wareHouseMap.buttonText1} type={`secondary`} onClick={() => onComplete('backward')} />
            <Button text={data.wareHouseMap.buttonText2} onClick={() => onComplete('forward')} />
          </div>
        </div>
      )}
    </>
  );
};

export default SetUpWarehouse;
