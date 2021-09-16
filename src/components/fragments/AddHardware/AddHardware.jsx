import React from 'react';

import Text from '../Text';
import { setupData as data } from '../../../appData';

const AddHardware = ({ children }) => {
  const [hardwares, setHardwares] = React.useState(data.setupHardware.data);

  const handleIncrement = idx => {
    console.log(idx);
    let items = hardwares.map((hds, i) => {
      if (i === idx) {
        hds.count = hds.count + 1;
        return hds;
      }
      return hds;
    });
    setHardwares(items);
  };

  const handleDecrement = idx => {
    let items = hardwares.map((hds, i) => {
      if (i === idx) {
        if (hds.count <= 0) return hds;
        hds.count = hds.count - 1;
        return hds;
      }
      return hds;
    });
    setHardwares(items);
  };

  return (
    <div className={`${children} flex space-x-6 flex-row space-y-0`}>
      {hardwares.map((item, idx) => {
        return <Item key={idx} idx={idx} item={item} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />;
      })}
    </div>
  );
};

const Item = ({ idx, item, handleIncrement, handleDecrement }) => {
  return (
    <div className={`flex flex-col space-y-6 justify-center items-center py-6 px-12 rounded-3xl bg-blue-100`}>
      <Text className={`text-center font-medium`} value={item.title} />
      <div className={`w-40 h-40 bg-white rounded-3xl overflow-hidden flex justify-center items-center`}>
        <img className={`p-6 w-full`} src={item.icon} alt={item.title} />
      </div>
      <div className={`flex space-x-4 items-center`}>
        <span
          onClick={() => handleDecrement(idx)}
          style={{ paddingTop: '2px' }}
          className={`text-white ${
            item.count <= 0 ? `bg-gray-300 ` : `bg-brand_blue`
          } w-5 h-5 flex justify-center items-center rounded-md cursor-pointer font-semibold select-none`}
        >
          -
        </span>
        <span className={`font-bold text-lg`}>{item.count}</span>
        <span
          onClick={() => handleIncrement(idx)}
          style={{ paddingTop: '2px' }}
          className={`text-white bg-brand_blue w-5 h-5 flex justify-center items-center rounded-md cursor-pointer font-semibold select-none`}
        >
          +
        </span>
      </div>
    </div>
  );
};

export default AddHardware;
