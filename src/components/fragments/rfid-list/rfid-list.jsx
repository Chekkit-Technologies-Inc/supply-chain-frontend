import React, { useState, useEffect } from 'react';
import ImageFadeIn from 'react-image-fade-in';
import FadeIn from 'react-fade-in/lib/FadeIn';

import rfidImage from '../../../assets/rfid.png';
import { ReactComponent as Check } from '../../../assets/check-brand.svg';
import { ReactComponent as Rfid } from '../../../assets/rfid-light.svg';

import InputBox from '../input-box';
import Text from '../text';

const RFIDList = ({ idx, hardware, onHardwareChange }) => {
  const [hardwareList, setHardwareList] = useState();
  const [current, setCurrent] = useState(null);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (hardwareList && updated) {
      onHardwareChange(idx, hardwareList);
    }
    setUpdated(false);
    // eslint-disable-next-line
  }, [hardwareList]);

  const handleClick = id => {
    if (id === current) {
      setCurrent(null);
    } else {
      setCurrent(id);
    }
  };

  const handleChange = (id, updatedItem) => {
    const list = hardwareList.map((hdw, index) => {
      if (id === index) {
        return updatedItem;
      }
      return hdw;
    });
    setUpdated(true);
    setHardwareList(list);
  };

  useEffect(() => {
    if (hardware.quantity > 0) {
      let arr = Array.from(Array(Number(hardware.quantity)).keys());
      let hds = arr.map(num => {
        return { id: num, selected: false, serialNumber: '' };
      });
      setHardwareList(hds);
    }
  }, [hardware]);

  return (
    <FadeIn className={`w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 grid-flow-row justify-evenly `}>
      <div className={` h-60 rounded-xl m-4`}>
        <ImageFadeIn className={`w-full h-full object-contain`} src={rfidImage} alt='rfid' opacityTransition={1} />
      </div>

      {hardwareList &&
        hardwareList.map(item => {
          return <Item key={item.id} id={item.id} item={item} selected={item.id === current} setCurrent={handleClick} onItemChange={handleChange} />;
        })}
    </FadeIn>
  );
};

const Item = ({ id, item, selected, setCurrent, onItemChange }) => {
  const handleItemChange = event => {
    const { name, value } = event.target;
    if (name === 'serialNumber' && value.length > 11) {
      event.preventDefault()
      return
    }
    onItemChange(id, { ...item, [name]: value });
  };

  const format = (str) => {
    return str.split('').reduce((prev, next, idx) => {
      if (idx <= 2) {
        return prev + next
      }
      else if (idx === 3) {
        return prev + next + ' - '
      }
      else if (idx > 3 && idx <= 6) {
        return prev + next
      }
      else if (idx === 7) {
        return prev + next + ' - '
      }
      else if (idx > 7) {
        return prev + next
      } else {
        return ''
      }
    })
  }
  return (
    <FadeIn>
      <div
        onClick={() => setCurrent(id)}
        className={`bg-brand_blue text-gray-100 h-60 rounded-xl m-4 cursor-pointer p-6 flex flex-col justify-between relative`}
      >
        <div>
          <Rfid className={`w-12 h-12`} />
        </div>
        {selected && <Check className={`w-8 h-8 absolute -right-2 -top-2 rounded-full border border-gray-100`} />}
        <div className={`border-2 border-dashed border-gray-100 p-2 font-mono text-xl flex justify-evenly`}>
          <span>{item.serialNumber ? format(item.serialNumber) : format('62196129612')}</span>
        </div>
      </div>
      {selected && (
        <div className={`bg-brand_blue text-gray-100 rounded-xl m-4 p-6 space-y-6`}>
          <Text className={`text-gray-100 text-sm`} value={`Enter the 11 digits number on the back of your card`} />
          <InputBox
            placeholder={`Enter RFID Tag Number`}
            type={`number`}
            name={`serialNumber`}
            variant={`controlled`}
            onValueChange={handleItemChange}
            value={item.serialNumber}
          />
        </div>
      )}
    </FadeIn>
  );
};

export default RFIDList;
