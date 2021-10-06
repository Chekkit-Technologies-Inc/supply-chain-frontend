import React, { useState, useEffect } from 'react';

import rfidImage from '../../../assets/rfid.png';
import { ReactComponent as Check } from '../../../assets/check-brand.svg';
import { ReactComponent as Rfid } from '../../../assets/rfid-light.svg';

import InputBox from '../input-box';
import Text from '../text';

const RFIDList = ({ hardwares }) => {
  const [harewareList, setHarewareList] = useState();
  const [current, setCurrent] = useState();

  useEffect(() => {
    if (hardwares[0].count > 0) {
      let arr = Array.from(Array(Number(hardwares[0].count)).keys());
      let hds = arr.map(num => {
        return { id: num, selected: false };
      });
      setHarewareList(hds);
    }
  }, [hardwares]);

  return (
    <div className={`w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 grid-flow-row justify-evenly `}>
      <div className={` h-60 rounded-xl m-4`}>
        <img className={`w-full h-full object-contain`} src={rfidImage} alt='rfid' />
      </div>

      {harewareList &&
        harewareList.map(item => {
          return <Item key={item.id} id={item.id} selected={item.id === current} setCurrent={setCurrent} />;
        })}
    </div>
  );
};

const Item = ({ id, selected, setCurrent }) => {
  const handleClick = () => {
    setCurrent(id);
  };
  return (
    <div>
      <div onClick={handleClick} className={`bg-brand_blue text-gray-100 h-60 rounded-xl m-4 cursor-pointer p-6 flex flex-col justify-between relative`}>
        <div>
          <Rfid className={`w-12 h-12`} />
        </div>
        {selected && <Check className={`w-8 h-8 absolute -right-2 -top-2 rounded-full border border-gray-100`} />}
        <div className={`border-2 border-dashed border-gray-100 p-2 font-mono text-xl flex justify-evenly`}>
          <span>6219</span>
          <span>8619</span>
          <span>2888</span>
          <span>8075</span>
        </div>
      </div>
      {selected && (
        <div className={`bg-brand_blue text-gray-100 rounded-xl m-4 p-6 space-y-6`}>
          <Text className={`text-gray-100 text-sm`} value={`Enter the 11 digits number on the back of your card`} />
          <InputBox placeholder={`Enter RFID Tag Number`} type={`number`} />
        </div>
      )}
    </div>
  );
};

export default RFIDList;
