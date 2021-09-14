import { useState, useRef } from 'react';

import PickManagement from '../../components/sections/PickManagement';
import SetUpWarehouse from '../../components/sections/SetUpWarehouse';
import WareHousesMap from '../../components/sections/WareHousesMap';
import SetUpHardware from '../../components/sections/SetUpHardware';

const SetUp = () => {
  const steps = useRef(4);
  const [pos, setPos] = useState(0);

  const onComplete = dir => {
    console.log(pos);
    if (dir === 'forward' && pos < steps.current - 1) {
      setPos(pos => pos + 1);
    }

    if (dir === 'backward' && pos > 0) {
      setPos(pos => pos - 1);
    }
  };

  return (
    <div className={`p-6 mt-24`}>
      {pos === 0 && <PickManagement onComplete={onComplete} />}
      {pos === 1 && <SetUpWarehouse onComplete={onComplete} />}
      {pos === 2 && <WareHousesMap onComplete={onComplete} />}
      {pos === 3 && <SetUpHardware onComplete={onComplete} />}
    </div>
  );
};

export default SetUp;
