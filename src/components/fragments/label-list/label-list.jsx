import React, { useState, useEffect } from 'react';
import ImageFadeIn from 'react-image-fade-in';
import FadeIn from 'react-fade-in/lib/FadeIn';

import sticker from '../../../assets/sticker.png';

const LabelList = ({ hardware }) => {
  const [harewareList, setHarewareList] = useState();

  useEffect(() => {
    if (hardware.quantity > 0) {
      let arr = Array.from(Array(Number(hardware.quantity)).keys());
      let hds = arr.map(num => {
        return { id: num };
      });
      setHarewareList(hds);
    }
  }, [hardware]);

  return (
    <FadeIn className={`w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 grid-flow-row justify-evenly `}>
      {harewareList &&
        harewareList.map(item => {
          return <Item key={item.id} />;
        })}
    </FadeIn>
  );
};

const Item = () => {
  return (
    <FadeIn>
      <div className={`bg-brand_blue text-gray-100 h-60 rounded-xl m-4 cursor-pointer p-6 flex flex-col justify-between relative`}>
        <div>
          <ImageFadeIn src={sticker} opacityTransition={1} className={`w-12 h-12`} />
        </div>
      </div>
    </FadeIn>
  );
};

export default LabelList;
