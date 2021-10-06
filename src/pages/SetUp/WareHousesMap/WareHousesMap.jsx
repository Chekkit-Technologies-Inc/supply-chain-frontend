import React from 'react';

import Heading from '../../../components/fragments/heading';
import Button from '../../../components/fragments/button';
import WarehouseMap from '../../../components/fragments/warehouse-map';

import { setupData as data } from '../../../app-data';

const WareHousesMap = ({ onComplete }) => {
  return (
    <div className={`flex flex-col justify-center items-center space-y-6 p-6 pb-16 min-h-screen w-full mx-auto`}>
      <Heading className={`font-medium text-center text-brand_blue`} title={data.wareHouseMap.title} size={2} />
      <WarehouseMap />
      <div className={`flex space-x-4 md:space-x-12 justify-center`}>
        <Button text={data.wareHouseMap.buttonText1} type={`secondary`} onClick={() => onComplete('backward')} />
        <Button text={data.wareHouseMap.buttonText2} onClick={() => onComplete('forward')} />
      </div>
    </div>
  );
};

export default WareHousesMap;
