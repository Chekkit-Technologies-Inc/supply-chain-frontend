import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as ActivationFlow } from '../../../assets/activation.svg';

import Heading from '../../../components/fragments/heading';
import Button from '../../../components/fragments/button';

import { HardwareActions } from '../../../states/actions';

const Activation = () => {
  const hardwares = useSelector(state => state.hardwares);
  const [serial, setSerial] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    hardwares.forEach(hardware => {
      if (hardware.name === 'Chekkit RFID') {
        let SN = hardware?.withRfid?.reduce((prev, next) => {
          return prev.concat({ serialNumber: String(next.serialNumber) });
        }, []);
        setSerial(SN);
      }
    });
  }, [hardwares]);

  const activate = () => {

    Promise.all(
      serial.map(sn => {
        return dispatch(HardwareActions.registerRfid(sn)).catch(console.log);
      }),
    )
      .then(res => {
        if (res[0].data.statusCode === 201) {
          history.push('/setup/activation/success');
        }
      })
      .catch(console.log);
  };

  return (
    <FadeIn className={`p-6 pb-16 pt-12 w-full min-h-screen flex flex-col justify-between space-y-6`}>
      <Heading className={`font-semibold text-center mt-6 slate`} title={`Activation In Process`} />
      <div className={`w-full flex overflow-auto`}>
        <ActivationFlow className={`py-12 flex-shrink-0`} />
      </div>
      <div className={`flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12  justify-center`}>
        <Button className={`md:w-60`} text={`Back`} type={`secondary`} onClick={() => history.goBack()} />

        <Button className={`md:w-60`} text={`Activate`} onClick={activate} />
      </div>
    </FadeIn>
  );
};

export default Activation;
