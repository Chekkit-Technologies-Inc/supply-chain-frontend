import React from 'react';

import logo from '../../../assets/logo.svg';
import Heading from '../../fragments/Heading';
import Text from '../../fragments/Text';
import Button from '../../fragments/Button';
import AddHardware from '../../fragments/AddHardware';

import { setupData as data } from '../../../appData';

const SetUpHardware = ({ onComplete }) => {
  return (
    <div className={`p-6 `}>
      <img width={150} src={logo} alt='logo' />
      <div className={`flex flex-col items-center space-y-6 mt-12`}>
        <div
          style={{
            opacity: '.99',
            display: 'grid',
            gridTemplateColumns: 'auto',
            gridTemplateRows: '140px 200px 1fr',
          }}
        >
          <div style={{ borderRadius: '80px' }} className={`col-span-full row-start-1 row-end-3 space-y-6 h-full bg-brand_blue p-6 md:p-12 text-center`}>
            <Heading className={`font-semibold text-center text-gray-100 slate`} title={data.setupHardware.title} />
            <Text className={`text-center text-gray-100`} value={data.setupHardware.description} />
          </div>
          <div className={`col-span-full row-start-2 row-end-4 z-50 p-6 md:p-12 md:pb-0`}>
            <AddHardware />
          </div>
        </div>
        <Button text={data.setupHardware.buttonText} onClick={() => onComplete('forward')} />
      </div>
    </div>
  );
};

export default SetUpHardware;
