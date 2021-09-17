import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../../assets/logo.svg';
import Heading from '../../fragments/Heading';
import Text from '../../fragments/Text';
import Button from '../../fragments/Button';
import { Tabs, Panel } from '../../fragments/Tabs';

// import AddHardware from '../../fragments/AddHardware';

import { setupData as data } from '../../../appData';

const ActivateHardware = ({ hardwares, onComplete }) => {
  const history = useHistory();
  console.log(hardwares);
  return (
    <div className={`p-6 w-full `}>
      <img onClick={() => history.push('/')} width={150} className={`cursor-pointer`} src={logo} alt='logo' />
      <div className={`flex flex-col items-center space-y-6 mt-12 `}>
        <div className={`w-full space-y-6`}>
          <div>
            <Heading className={`font-semibold text-center text-brand_blue my-6`} title={`Hi, Barbie Valeria !`} />
            <Text
              className={`text-center text-brand_blue mb-2`}
              value={`You have selected ${hardwares[0].count} RFIDs, ${hardwares[1].count} printers, and  ${hardwares[2].count} RFIDs.`}
            />
            <Text className={`text-center text-brand_blue`} value={data.activateHardware.description} />
          </div>
          <div className={`w-full max-w-2xl mx-auto p-6 md:px-16 md:pb-0`}>
            <Tabs variant={`light`}>
              <Panel title={'Chekkit RFID'}></Panel>
              <Panel title={'Sticker Printer'}></Panel>
              <Panel title={'Sticker Labels'}></Panel>
            </Tabs>
          </div>
        </div>
        <Button text={data.activateHardware.buttonText} onClick={() => onComplete('forward')} />
      </div>
    </div>
  );
};

export default ActivateHardware;
