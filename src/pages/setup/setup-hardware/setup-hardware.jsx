import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FadeIn from 'react-fade-in/lib/FadeIn';

import Heading from '../../../components/fragments/heading';
import Text from '../../../components/fragments/text';
import Button from '../../../components/fragments/button';
import AddHardware from '../../../components/fragments/add-hardware';

import { setupData as data } from '../../../app-data';

import { HardwareActions } from '../../../states/actions';

const SetUpHardware = () => {
  const [hardwares, setHardwares] = useState(data.setupHardware.data);
  const dispatch = useDispatch();
  const history = useHistory();

  const createHardware = () => {
    let hardwareList = hardwares.filter(hardware => hardware.quantity > 0);

    if (hardwareList.length < 1) {
      history.push(`/onboarding`);
      return;
    }

    dispatch(HardwareActions.createHardware(hardwareList))
      .then(() => {
        history.push(`/setup/hardware/preview`);
      })
      .catch(console.log);
  };

  return (
    <FadeIn className={`flex flex-col justify-center space-y-6 p-6 pb-16 min-h-screen w-full mx-auto`}>
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
      <Button className={`mx-auto w-80`} text={data.setupHardware.buttonText} onClick={createHardware} />
    </FadeIn>
  );
};

export default SetUpHardware;
