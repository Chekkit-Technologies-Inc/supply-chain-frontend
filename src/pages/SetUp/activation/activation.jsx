import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as ActivationFlow } from '../../../assets/activation.svg';

import thumb from '../../../assets/thumb.png';
import Heading from '../../../components/fragments/heading';
import Text from '../../../components/fragments/text';
import Button from '../../../components/fragments/button';

const Activation = ({ onComplete }) => {
  const history = useHistory();
  const steps = useRef(2);
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
        <div className={`p-6 pb-16 pt-12 w-full min-h-screen flex flex-col justify-between items-center space-y-6 `}>
          <Heading className={`font-semibold text-center mt-6 slate`} title={`Activation In Process`} />
          <div className={`w-full flex overflow-auto`}>
            <ActivationFlow className={`py-12 flex-shrink-0`} />
          </div>
          <div className={`flex space-x-4 md:space-x-12 justify-center`}>
            <Button className={`sm:w-60`} text={`Back`} type={`secondary`} onClick={() => onComplete('backward')} />

            <Button className={`sm:w-60`} text={`Activate`} onClick={() => onProceed('forward')} />
          </div>
        </div>
      )}
      {pos === 1 && (
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
