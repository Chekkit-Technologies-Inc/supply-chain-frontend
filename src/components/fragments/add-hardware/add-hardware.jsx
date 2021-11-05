import React from 'react';
import ImageFadeIn from 'react-image-fade-in';
import FadeIn from 'react-fade-in/lib/FadeIn';

import { ReactComponent as Rfid } from '../../../assets/rfid.svg';
import { ReactComponent as Printer } from '../../../assets/printer.svg';
import Sticker from '../../../assets/sticker.png';

import Text from '../text';

const AddHardware = ({ hardwares, setHardwares }) => {
  const handleIncrement = idx => {
    let items = hardwares.map((hds, i) => {
      if (i === idx) {
        hds.quantity = Number(hds.quantity) + 1;
        return hds;
      }
      return hds;
    });
    setHardwares(items);
  };

  const handleDecrement = idx => {
    let items = hardwares.map((hds, i) => {
      if (i === idx) {
        if (hds.quantity <= 0) return hds;
        hds.quantity = Number(hds.quantity) - 1;
        return hds;
      }
      return hds;
    });
    setHardwares(items);
  };

  const handleChange = (e, idx) => {
    let items = hardwares.map((hds, i) => {
      if (i === idx) {
        hds.quantity = e.target.value;
        return hds;
      }
      return hds;
    });
    setHardwares(items);
  };

  return (
    <FadeIn className={`grid grid-cols-1 lg:grid-cols-3 space-y-6 lg:space-y-0 lg:space-x-6 w-full`}>
      {hardwares &&
        hardwares.map((item, idx) => {
          return <Item key={idx} idx={idx} item={item} handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleChange={handleChange} />;
        })}
    </FadeIn>
  );
};

const Item = ({ idx, item, handleIncrement, handleDecrement, handleChange }) => {
  return (
    <div className={`flex flex-col space-y-6 justify-center items-center py-6 px-12 rounded-3xl bg-blue-100`}>
      <Text className={`text-center font-medium`} value={item.name} />
      <div className={`w-40 h-40 bg-white rounded-3xl overflow-hidden flex justify-center items-center p-6`}>
        {item.name === 'Sticker Printer' && (
          <div>
            <Printer className={`w-full h-full p-2`} />
          </div>
        )}
        {item.name === 'Sticker Label' && <ImageFadeIn className={`w-full h-full`} src={Sticker} alt={item.name} opacityTransition={1} />}
        {item.name === 'Chekkit RFID' && (
          <div>
            <Rfid className={`w-full h-full p-2`} />
          </div>
        )}
      </div>
      <div className={`flex space-x-4 items-center`}>
        <span
          onClick={() => handleDecrement(idx)}
          style={{ paddingTop: '2px' }}
          className={`text-white ${
            item.quantity <= 0 ? `bg-gray-300 ` : `bg-brand_blue`
          } w-5 h-5 flex justify-center items-center rounded-md cursor-pointer font-semibold select-none`}
        >
          -
        </span>
        <input onChange={e => handleChange(e, idx)} className={`font-bold p-2 text-lg text-center w-12 bg-transparent`} value={item.quantity} type={`number`} />
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
