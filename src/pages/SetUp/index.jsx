import { useState, useRef } from 'react';

import { setupData as data } from '../../app-data.js';

import Container from '../../components/layout/container';
import PickManagement from './pick-management';
import PickPlan from './pick-plan';
import SetUpWarehouse from './setup-warehouse';
import WareHousesMap from './warehouses-map';
import SetUpHardware from './setup-hardware';
import Activation from './activation';

const SetUp = () => {
  const steps = useRef(6);
  const [pos, setPos] = useState(0);
  const [hardwares, setHardwares] = useState(data.setupHardware.data);

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
      <Container className={`max-w-7xl mx-auto`}>
        {pos === 0 && <PickManagement onComplete={onComplete} />}
        {pos === 1 && <PickPlan onComplete={onComplete} />}
        {pos === 2 && <SetUpWarehouse onComplete={onComplete} />}
        {pos === 3 && <WareHousesMap onComplete={onComplete} />}
        {pos === 4 && <SetUpHardware hardwares={hardwares} setHardwares={setHardwares} onComplete={onComplete} />}
        {pos === 5 && <Activation hardwares={hardwares} setHardwares={setHardwares} onComplete={onComplete} />}
      </Container>
    </div>
  );
};

export default SetUp;
