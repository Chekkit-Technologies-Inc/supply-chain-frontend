import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FadeIn from 'react-fade-in/lib/FadeIn';

import Heading from '../../../components/fragments/heading';
import Text from '../../../components/fragments/text';
import Button from '../../../components/fragments/button';
import ActivateHardware from '../../../components/fragments/activate-hardware';

import { setupData as data } from '../../../app-data';
import { HardwareActions } from '../../../states/actions';

import { ResponseActions } from '../../../states/actions';

const HardwarePreview = () => {
  const dispatch = useDispatch();
  const hardwares = useSelector(state => state.hardwares);
  const [hardwareList, setHarewareList] = useState();
  const history = useHistory();
  const [message, setMessage] = useState('You have selected ');

  useEffect(() => {
    if (hardwares.length > 0) {
      let msg = hardwares.reduce((message, hdw) => {
        let str = `${message}${hdw.quantity} ${hdw.name}${hdw.quantity === 1 ? `` : `s`}, `;
        return str;
      }, message);
      setMessage(msg.slice(0, msg.length - 2));
      setHarewareList(hardwares);
    } // eslint-disable-next-line
  }, [hardwares]);

  const onProceed = () => {
    let activate = false
    hardwareList.forEach(hd => {
      if (hd.name === 'Chekkit RFID') {
        activate = hd?.withRfid?.every(
          sn => sn?.serialNumber?.length === 11
        );
      }
    })

    if (!activate) {
      dispatch(ResponseActions.notify({ title: 'Error', message: 'RFID Number must be 11 digits', type: 'danger', loading: false }));
      return;
    }

    dispatch(HardwareActions.addRfidPins(hardwareList));
    history.push('/setup/activation');
  };

  return (
    <FadeIn className={`flex flex-col justify-center space-y-6 p-6 pb-16 min-h-screen w-full mx-auto`}>
      {hardwareList && hardwareList.length > 0 && (
        <div className={`w-full space-y-6`}>
          <div>
            <Heading className={`font-semibold text-center text-brand_blue my-6`} title={`Hi, Barbie Valeria !`} />
            <Text className={`text-center text-brand_blue mb-2`} value={message} />
            <Text className={`text-center text-brand_blue`} value={data.activateHardware.description} />
          </div>
          <div className={`w-full p-6 md:px-16 md:pb-0`}>
            <ActivateHardware hardwares={hardwareList} setHardwares={setHarewareList} />
          </div>
        </div>
      )}
      <Button className={`mx-auto`} text={data.activateHardware.buttonText} onClick={onProceed} />
    </FadeIn>
  );
};

export default HardwarePreview;
