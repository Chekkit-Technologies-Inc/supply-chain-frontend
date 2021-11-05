import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FadeIn from 'react-fade-in/lib/FadeIn';

import Heading from '../../../components/fragments/heading';
import Button from '../../../components/fragments/button';
import AddWarehouse from '../../../components/fragments/add-warehouse';
import { Warehouse } from '../../../models';

import { WarehouseActions } from '../../../states/actions';
import { ResponseActions } from '../../../states/actions';

import { setupData as data } from '../../../app-data';

const SetUpWarehouse = () => {
  const [wareHouseList, setWareHouseList] = useState([new Warehouse()]);
  const [reset, setReset] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const createWarehouses = () => {
    let create = wareHouseList.every(
      warehouse => warehouse.name && warehouse.address && warehouse.country && warehouse.capacity && warehouse.latitude && warehouse.longitude,
    );

    if (!create) {
      dispatch(ResponseActions.notify({ title: 'Error', message: 'Incomplete warehouse data', type: 'danger', loading: false }));
      return;
    }

    dispatch(WarehouseActions.createWarehouse(wareHouseList))
      .then(() => {
        setReset(true);
        setWareHouseList([new Warehouse()]);
        dispatch(WarehouseActions.fetchWarehouses());
        history.push('/setup/warehouse/map-preview');
      })
      .catch(console.log);
  };

  return (
    <FadeIn className={`flex flex-col min-h-screen justify-center space-y-6 p-6 pb-16 mx-auto w-full`}>
      <Heading className={`font-medium text-center text-brand_blue`} title={data.setupWarehouse.title} size={2} />
      <AddWarehouse wareHouses={wareHouseList} setWareHouses={setWareHouseList} reset={reset} />
      <div className={`flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12  justify-center`}>
        <Button text={data.setupWarehouse.buttonText1} type={`secondary`} onClick={() => history.goBack()} />
        <Button text={`Skip`} type={`secondary`} onClick={() => history.push('/setup/warehouse/map-preview')} />
        <Button text={data.setupWarehouse.buttonText2} onClick={createWarehouses} />
      </div>
    </FadeIn>
  );
};

export default SetUpWarehouse;
