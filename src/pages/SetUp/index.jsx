import { useState, useRef } from 'react';

import Logo from '../../components/fragments/logo';
import Container from '../../components/layout/container';
import PickManagement from './pick-management';
import PickPlan from './pick-plan';
import SetUpWarehouse from './setup-warehouse';
import SetUpHardware from './setup-hardware';
import Activation from './activation';

const SetUp = () => {
  const steps = useRef(5);
  const [pos, setPos] = useState(0);

  const onComplete = (dir, data) => {
    if (dir === 'forward' && pos < steps.current - 1) {
      setPos(pos => pos + 1);
    }

    if (dir === 'backward' && pos > 0) {
      setPos(pos => pos - 1);
    }
  };

  return (
    <div className={`min-h-screen bg`}>
      {pos === 3 && (
        <div className={`w-full px-6 2xl:px-52 pt-8 max-w-3000 mx-auto`}>
          <Logo size={180} />
        </div>
      )}
      <Container className={`max-w-7xl mx-auto`}>
        {pos === 0 && <PickManagement onComplete={onComplete} />}
        {pos === 1 && <PickPlan onComplete={onComplete} />}
        {pos === 2 && <SetUpWarehouse onComplete={onComplete} />}
        {pos === 3 && <SetUpHardware onComplete={onComplete} />}
        {pos === 4 && <Activation onComplete={onComplete} />}
      </Container>
    </div>
  );
};

export default SetUp;
