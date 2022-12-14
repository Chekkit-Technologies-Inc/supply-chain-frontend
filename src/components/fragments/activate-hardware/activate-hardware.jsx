import React from 'react';

import { Tabs, Panel } from '../tabs';
import RFIDList from '../rfid-list';

const ActivateHardware = ({ hardwares }) => {
  return (
    <div className={`w-full`}>
      <Tabs className={`w-full max-w-lg mx-auto`} variant={`light`}>
        <Panel title={'Chekkit RFID'}>
          <RFIDList hardwares={hardwares} />
        </Panel>
        <Panel title={'Sticker Printer'}></Panel>
        <Panel title={'Sticker Labels'}></Panel>
      </Tabs>
    </div>
  );
};

export default ActivateHardware;
