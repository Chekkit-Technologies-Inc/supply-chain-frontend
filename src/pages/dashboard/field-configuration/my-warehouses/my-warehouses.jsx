import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useSelector } from 'react-redux';

import InputBox from '../../../../components/fragments/input-box';
import Button from '../../../../components/fragments/button';
import Heading from '../../../../components/fragments/heading';
import WarehouseMap from '../../../../components/fragments/warehouse-map';
import { ReactComponent as Filter } from '../../../../assets/sites-filter.svg';

const MyWarehouses = () => {
  const warehouses = useSelector(state => state.warehouses);
  const [phrase, setPhrase] = useState('');
  const history = useHistory();

  const handleInputChange = event => {
    const { value } = event.target;
    setPhrase(value);
  };

  return (
    <FadeIn
      className={`flex flex-col justify-start
     space-y-6 p-6 py-16 min-h-screen w-full mx-auto bg-white`}
    >
      <Heading className={`font-medium`} title={`My Warehouses`} />
      <div className={`flex flex-col space-y-4 xl:space-y-0 xl:flex-row items-center justify-between space-x-4`}>
        <div className={`flex items-center space-x-6`}>
          <div className={`w-96`}>
            <InputBox value={phrase} onValueChange={handleInputChange} name={`phrase`} placeholder={`Search...`} variant={4} className={``} type={`search`} />
          </div>
          <div className={`border border-brand_blue rounded-xl p-2 cursor-pointer`}>
            <Filter />
          </div>
        </div>
        <div className={`flex items-center space-x-6`}>
          <Button className={``} text={`Add More Warehouses`} onClick={() => history.push('/setup/warehouse')} />
        </div>
      </div>
      <WarehouseMap warehouses={warehouses} />
    </FadeIn>
  );
};

export default MyWarehouses;
