import { useState } from 'react';

import InputBox from '../InputBox';
import SelectBox from '../SelectBox';
import Heading from '../Heading';
import Text from '../Text';

const AddWarehouse = () => {
  const [wareHouses, setWareHouses] = useState([1]);

  const add = () => {
    let num = wareHouses[wareHouses.length - 1] + 1;
    setWareHouses([...wareHouses, num]);
  };

  return (
    <div className={`px-6 md:px-12 py-16 bg-brand_blue rounded-3xl space-y-12 w-full`}>
      {wareHouses.map((item, idx) => {
        return <WareHouse key={idx} num={item} />;
      })}
      <div className={`p-4 flex justify-center items-center cursor-pointer border border-dashed border-gray-200 rounded-md  text-gray-200`} onClick={add}>
        Add More Warehouse
      </div>
    </div>
  );
};

const WareHouse = ({ num }) => {
  return (
    <>
      <Heading className={`font-medium text-gray-200`} title={`Warehouse ${num}`} size={2} />
      <div className={`space-y-12`}>
        <div className={`flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0`}>
          <SelectBox label={`Address`} labelColor={`text-gray-200`} options={['Lagos', 'Abuja']} />
          <SelectBox label={`State`} labelColor={`text-gray-200`} options={['Lagos', 'Abuja']} />
          <SelectBox label={`Country`} labelColor={`text-gray-200`} options={['Lagos', 'Abuja']} />
        </div>
        <div className={`flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0`}>
          <InputBox label={`Latitude`} labelColor={`text-gray-200`} placeholder={`Type Here`} />
          <InputBox label={`Longitude`} labelColor={`text-gray-200`} placeholder={`Type Here`} />
          <InputBox label={`Capacity`} labelColor={`text-gray-200`} placeholder={`Type Here`} />
        </div>
      </div>
      <div className={`flex justify-end`}>
        <Text className={`text-gray-200 cursor-pointer underline`} value={`Link To Map`} />
      </div>
    </>
  );
};

export default AddWarehouse;
