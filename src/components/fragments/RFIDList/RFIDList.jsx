import React, { useState } from 'react';

import rfidImage from '../../../assets/rfid.png';
import InputBox from '../InputBox';
import Text from '../Text';

const RFIDList = ({ hardwares }) => {
  const getHardwares = num => {
    console.log(hardwares);
    return Array.from(Array(Number(num)).keys());
  };

  return (
    <div className={`w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 grid-flow-row justify-evenly `}>
      <div className={` h-60 rounded-xl m-4`}>
        <img className={`w-full h-full object-contain`} src={rfidImage} alt='rfid' />
      </div>

      {hardwares[0].count > 0 &&
        getHardwares(hardwares[0].count).map((item, idx) => {
          return <Item key={idx} />;
        })}
    </div>
  );
};

const Item = () => {
  const [showInput, setShowInput] = useState(false);
  return (
    <div>
      <div
        onClick={() => setShowInput(!showInput)}
        className={`bg-brand_blue text-gray-100 h-60 rounded-xl m-4 cursor-pointer p-6 flex flex-col justify-between`}
      >
        <div>Icon</div>
        <div className={`border-2 border-dashed border-gray-100 p-2 font-mono text-xl flex justify-evenly`}>
          <span>6219</span>
          <span>8619</span>
          <span>2888</span>
          <span>8075</span>
        </div>
      </div>
      {showInput && (
        <div className={`bg-brand_blue text-gray-100 rounded-xl m-4 p-6 space-y-6`}>
          <Text className={`text-gray-100 text-sm`} value={`Enter the 11 digits number on the back of your card`} />
          <InputBox placeholder={`Enter RFID Tag Number`} type={`number`} />
        </div>
      )}
    </div>
  );
};

export default RFIDList;
