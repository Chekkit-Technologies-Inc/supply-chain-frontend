import { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

import InputBox from '../input-box';
import Heading from '../heading';
import Text from '../text';

import { Warehouse } from '../../../models';

const AddWarehouse = ({ wareHouses, setWareHouses, reset }) => {
  const handleAdd = () => {
    setWareHouses([...wareHouses, new Warehouse()]);
  };

  const handleRemove = index => {
    let whs = wareHouses.filter((wh, idx) => {
      return index !== idx;
    });
    setWareHouses(whs);
  };

  const handleUpdate = (index, detail) => {
    let whs = wareHouses.map((wh, idx) => {
      if (index === idx) {
        return { ...wh, ...detail };
      }
      return wh;
    });
    setWareHouses(whs);
  };

  return (
    <FadeIn className={`px-6 md:px-12 py-16 bg-brand_blue rounded-3xl space-y-12 w-full`}>
      {wareHouses.map((item, idx) => {
        return <WareHouse key={idx} num={idx} item={item} onRemove={handleRemove} onItemChange={handleUpdate} reset={reset} />;
      })}
      <div className={`p-4 flex justify-center items-center cursor-pointer border border-dashed border-gray-200 rounded-md  text-gray-200`} onClick={handleAdd}>
        Add More Warehouse
      </div>
    </FadeIn>
  );
};

const WareHouse = ({ num, item, onRemove, onItemChange, reset }) => {
  const [detail, setDetail] = useState({ name: '', capacity: '' });

  useEffect(() => {
    if (reset) {
      setDetail({ name: '', capacity: '' });
    }
  }, [reset]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'address') {
      onItemChange(num, { [name]: value, latitude: '', longitude: '', state: '', country: '' });
    } else {
      setDetail({ ...detail, [name]: value });
      onItemChange(num, { [name]: value });
    }
  };

  const handleAddressChange = place => {
    const address = place.formatted_address;
    const latitude = place.geometry.location.lat();
    const longitude = place.geometry.location.lng();
    onItemChange(num, { address, latitude, longitude });
  };

  const onFocusChange = () => {
    setTimeout(() => {
      if (!item.latitude && !item.longitude) {
        onItemChange(num, { address: '', state: '', country: '' });
        return;
      }
    }, 0);
  };

  useEffect(() => {
    if (item.address && item.latitude && item.longitude) {
      let arr = item?.address?.split(',');
      let address = arr.slice(0, arr.length - 1).join('');
      let country = arr[arr.length - 1].replace(' ', '');
      let arr2 = address.split(' ');
      let state = arr2[arr2.length - 1];
      onItemChange(num, { ...detail, address, state, country });
    } // eslint-disable-next-line
  }, [item.latitude, item.longitude]);

  return (
    <FadeIn className={`space-y-6`}>
      <Heading className={`font-medium text-gray-200`} title={`Warehouse ${num + 1}`} size={2} />
      <form autoComplete={`off`} className={`space-y-12`}>
        <div className={`flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0`}>
          <InputBox
            label={`Name`}
            name={`name`}
            value={detail.name}
            onValueChange={handleInputChange}
            labelColor={`text-gray-200`}
            placeholder={`Type Here`}
            required={true}
          />
          <InputBox
            label={`Capacity`}
            name={`capacity`}
            value={detail.capacity}
            type={`number`}
            onValueChange={handleInputChange}
            labelColor={`text-gray-200`}
            placeholder={`Type Here`}
            required={true}
          />
        </div>
        <div className={`flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0`}>
          <InputBox
            label={`Address`}
            labelColor={`text-gray-200`}
            placeholder={`Type Here`}
            variant={'places'}
            name={`address`}
            placeType={`regions`}
            value={item?.address}
            onValueChange={handleInputChange}
            onPlaceSelected={handleAddressChange}
            onFocusChange={onFocusChange}
            required={true}
          />
          <InputBox
            label={`Country`}
            name={`country`}
            defaultValue={item?.country}
            labelColor={`text-gray-200`}
            placeholder={`Type Here`}
            readOnly={true}
            required={true}
          />
        </div>
      </form>
      <div className={`flex justify-between`}>
        {num > 0 && <Text onClick={() => onRemove(num)} className={`text-gray-200 cursor-pointer underline`} value={`Remove`} />}
        <div></div>
        <Text className={`text-gray-200 cursor-pointer underline`} value={`Link To Map`} />
      </div>
    </FadeIn>
  );
};

export default AddWarehouse;
