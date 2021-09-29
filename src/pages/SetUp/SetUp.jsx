import { useState, useRef } from 'react';

import { setupData as data } from '../../appData.js';

import Container from '../../components/layout/Container';
import PickManagement from '../../components/sections/PickManagement';
import PickPlan from '../../components/sections/PickPlan';
import SetUpWarehouse from '../../components/sections/SetUpWarehouse';
import WareHousesMap from '../../components/sections/WareHousesMap';
import SetUpHardware from '../../components/sections/SetUpHardware';
import Activation from '../../components/sections/Activation';

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
