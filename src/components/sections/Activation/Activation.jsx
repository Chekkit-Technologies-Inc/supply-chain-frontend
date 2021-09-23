import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../../assets/logo.svg';
import activation from '../../../assets/activation.svg';
import thumb from '../../../assets/thumb.png';
import Heading from '../../fragments/Heading';
import Text from '../../fragments/Text';
import Button from '../../fragments/Button';
import ActivateHardware from '../../fragments/ActivateHardware';

import { setupData as data } from '../../../appData';

const Activation = ({ hardwares }) => {
  const history = useHistory();
  const steps = useRef(3);
  const [pos, setPos] = useState(0);

  const onProceed = dir => {
    if (dir === 'forward' && pos < steps.current - 1) {
      setPos(pos => pos + 1);
    }
    console.log(dir);

    if (dir === 'backward' && pos > 0) {
      setPos(pos => pos - 1);
    }
  };

  return (
    <>
      {pos === 0 && (
        <div className={`p-6 pb-16 w-full `}>
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
              <div className={`w-full p-6 md:px-16 md:pb-0`}>
                <ActivateHardware hardwares={hardwares} />
              </div>
            </div>
            <Button text={data.activateHardware.buttonText} onClick={() => onProceed('forward')} />
          </div>
        </div>
      )}
      {pos === 1 && (
        <div className={`p-6 pb-16 pt-12 w-full min-h-screen flex flex-col justify-between items-center space-y-6 `}>
          <Heading className={`font-semibold text-center mt-6 slate`} title={`Activation In Process`} />
          <div className={`w-full h-full py-12`}>
            <img src={activation} alt='activation steps' />
          </div>
          <div className={`flex space-x-4 md:space-x-12 justify-center`}>
            <Button className={`sm:w-60`} text={`Back`} type={`secondary`} onClick={() => onProceed('backward')} />

            <Button className={`sm:w-60`} text={`Activate`} onClick={() => onProceed('forward')} />
          </div>
        </div>
      )}
      {pos === 2 && (
        <div className={`p-6 pb-16 pt-12 w-full min-h-screen flex flex-col justify-center items-center space-y-12`}>
          <div>
            <img width={300} src={thumb} alt='activation steps' />
          </div>
          <div className={`space-y-2`}>
            <Heading className={`font-semibold text-center mt-6`} title={`Successful`} />
            <Text className={`text-center text-brand_blue`} value={`Hardware Activated Successfully!`} />
          </div>
          <Button text={`Continue To Your Dashboard`} onClick={() => history.push('/dashboard')} />
        </div>
      )}
    </>
  );
};

export default Activation;
