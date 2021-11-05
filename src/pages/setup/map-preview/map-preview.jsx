import React from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useSelector } from 'react-redux';

import Heading from '../../../components/fragments/heading';
import Button from '../../../components/fragments/button';
import WarehouseMap from '../../../components/fragments/warehouse-map';

import { setupData as data } from '../../../app-data';

const MapPreview = () => {
  const warehouses = useSelector(state => state.warehouses);
  const history = useHistory();

  return (
    <FadeIn className={`flex flex-col justify-center space-y-6 p-6 pb-16 min-h-screen w-full mx-auto`}>
      <Heading className={`font-medium text-center text-brand_blue`} title={data.wareHouseMap.title} size={2} />
      <WarehouseMap warehouses={warehouses} />
      <div className={`flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12  justify-center`}>
        <Button text={data.wareHouseMap.buttonText1} type={`secondary`} onClick={() => history.goBack()} />
        <Button text={data.wareHouseMap.buttonText2} onClick={() => history.push('/setup/hardware')} />
      </div>
    </FadeIn>
  );
};

export default MapPreview;
