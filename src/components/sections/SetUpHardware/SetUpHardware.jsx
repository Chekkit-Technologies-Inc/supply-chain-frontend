import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../../assets/logo.svg';
import Heading from '../../fragments/Heading';
import Text from '../../fragments/Text';
import Button from '../../fragments/Button';
import AddHardware from '../../fragments/AddHardware';

import { setupData as data } from '../../../appData';

const SetUpHardware = ({ onComplete }) => {
  const history = useHistory();
  return (
    <div className={`p-6 w-full `}>
      <img onClick={() => history.push('/')} width={150} className={`cursor-pointer`} src={logo} alt='logo' />
      <div className={`flex flex-col items-center space-y-6 mt-12 `}>
        <div
          className={`w-full space-y-6`}
          style={{
            opacity: '.99',
            display: 'grid',
            gridTemplateColumns: '100%',
            gridTemplateRows: '200px 200px 1fr',
          }}
        >
          <div style={{ borderRadius: '80px' }} className={`col-span-full row-start-1 row-end-3 space-y-6 h-full bg-brand_blue p-6 md:p-12 text-center`}>
            <Heading className={`font-semibold text-center text-gray-100 mt-6 slate`} title={data.setupHardware.title} />
            <Text className={`text-center text-gray-100`} value={data.setupHardware.description} />
          </div>
          <div className={`col-span-full w-full row-start-2 row-end-4 z-50 p-6 md:px-16 md:pb-0`}>
            <AddHardware />
          </div>
        </div>
        <Button text={data.setupHardware.buttonText} onClick={() => onComplete('forward')} />
      </div>
    </div>
  );
};

export default SetUpHardware;
