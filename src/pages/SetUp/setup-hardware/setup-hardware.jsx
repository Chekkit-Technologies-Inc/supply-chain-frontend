import React, { useState, useRef } from 'react';

import Heading from '../../../components/fragments/heading';
import Text from '../../../components/fragments/text';
import Button from '../../../components/fragments/button';
import AddHardware from '../../../components/fragments/add-hardware';
import ActivateHardware from '../../../components/fragments/activate-hardware';

import { setupData as data } from '../../../app-data';

const SetUpHardware = ({ onComplete }) => {
  const steps = useRef(2);
  const [pos, setPos] = useState(0);
  const [hardwares, setHardwares] = useState(data.setupHardware.data);

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
        <div className={`flex flex-col justify-center items-center space-y-6 p-6 pb-16 min-h-screen w-full mx-auto`}>
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
              <AddHardware hardwares={hardwares} setHardwares={setHardwares} />
            </div>
          </div>
          <Button text={data.setupHardware.buttonText} onClick={() => onProceed('forward')} />
        </div>
      )}
      {pos === 1 && (
        <div className={`flex flex-col justify-center items-center space-y-6 p-6 pb-16 min-h-screen w-full mx-auto`}>
          {hardwares.length > 0 && (
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
          )}
          <Button text={data.activateHardware.buttonText} onClick={() => onComplete('forward')} />
        </div>
      )}
    </>
  );
};

export default SetUpHardware;
