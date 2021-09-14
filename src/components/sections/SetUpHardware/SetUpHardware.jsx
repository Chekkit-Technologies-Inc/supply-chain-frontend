import React from 'react';

import Heading from '../../fragments/Heading';
import Text from '../../fragments/Text';
import Button from '../../fragments/Button';

import { setupData as data } from '../../../appData';

const SetUpHardware = ({ onComplete }) => {
  return (
    <div className={`flex flex-col items-center space-y-6`}>
      <div className={`flex flex-col items-center space-y-6`}>
        <Heading className={`font-semibold text-center`} title={data.setupHardware.title} />
        <Text className={`text-center`} value={data.setupHardware.description} />
        <div className={`flex space-x-6 flex-row space-y-0`}>
          {data.setupHardware.data.map((item, idx) => {
            return <Item key={idx} item={item} />;
          })}
        </div>
      </div>
      <Button text={data.setupHardware.buttonText} onClick={() => onComplete('forward')} />
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <div className={`flex flex-col space-y-6 justify-center items-center p-6 rounded-3xl bg-blue-100`}>
      <Text className={`text-center font-medium`} value={item.title} />
      <img width={200} className={`bg-white rounded-3xl p-6`} src={item.icon} alt={item.title} />
      <div className={`flex space-x-4 items-center`}>
        <span>-</span>
        <span>0</span>
        <span>+</span>
      </div>
    </div>
  );
};

export default SetUpHardware;
