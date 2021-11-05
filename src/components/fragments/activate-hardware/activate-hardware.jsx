import React from 'react';

import { Tabs, Panel } from '../tabs';
import RFIDList from '../rfid-list';
import PrinterList from '../printer-list';
import LabelList from '../label-list';

const ActivateHardware = ({ hardwares, setHardwares }) => {
  const handleUpdate = (idx, update) => {
    let hds = hardwares.map((hd, i) => {
      if (idx === i) {
        hd.withRfid = update;
        return hd;
      }
      return hd;
    });
    setHardwares(hds);
  };

  return (
    <div className={`w-full`}>
      <Tabs className={`w-full max-w-lg mx-auto`} variant={`light`}>
        {hardwares &&
          hardwares.map((hardware, idx) => {
            return (
              <Panel key={idx} title={hardware.name}>
                {hardware.name === 'Chekkit RFID' && <RFIDList idx={idx} hardware={hardware} onHardwareChange={handleUpdate} />}
                {hardware.name === 'Sticker Printer' && <PrinterList hardware={hardware} />}
                {hardware.name === 'Sticker Label' && <LabelList hardware={hardware} />}
              </Panel>
            );
          })}
      </Tabs>
    </div>
  );
};

export default ActivateHardware;
