import React, { useState } from 'react';

import PlanItemDark from '../../../assets/plan-item-dark.svg';
import PlanItemLight from '../../../assets/plan-item-light.svg';

import Button from '../Button';

const PlanList = ({ items, onComplete }) => {
  const [selected, setSelected] = useState(1);

  const handleClick = idx => {
    if (selected === idx) {
      onComplete('forward');
      return;
    }
    setSelected(idx);
  };

  return (
    <div className={`flex flex-col md:flex-row justify-center items-center w-full`}>
      {items.map((item, idx) => {
        return <Item onClick={() => handleClick(idx)} selected={selected === idx} key={idx} item={item} />;
      })}
    </div>
  );
};

const Item = ({ item, onClick, selected }) => {
  return (
    <div
      onClick={onClick}
      className={`${selected ? `card` : ``} flex flex-col space-y-8 rounded-3xl max-w-lg cursor-pointer w-full divide-y divide-gray-300 transform ${
        selected ? `border-4 border-white bg-brand_blue p-12 shadow-2xl text-white z-10` : `bg-white p-6 text-gray-600 scale-95`
      }`}
    >
      <div className={`flex space-x-4 items-center`}>
        {selected ? (
          <div className={`w-20`}>
            <img className={`w-full`} src={PlanItemDark} alt={`asset`} />
          </div>
        ) : (
          <div className={`w-20`}>
            <img className={`w-full`} src={PlanItemLight} alt={`asset`} />
          </div>
        )}
        <div className={`space-y-1`}>
          <span className={`font-semibold ${selected ? `text-3xl` : `text-xl`} `}>{item.title}</span>
          <div className={`flex items-end space-x-1`}>
            <div className={`flex items-baseline`}>
              <sup className={`transform -translate-y-2 font-medium ${selected ? `text-lg` : `text-base`}`}>$</sup>
              <div className={`${selected ? `text-4xl` : `text-3xl`} font-bold`}>{item.amount}</div>
              <div className={`text-base transform -translate-y-1`}>/</div>
            </div>
            <div className={`text-base transform -translate-y-1`}>{item.duration}</div>
          </div>
        </div>
      </div>
      <div className={`pt-8 space-y-8`}>
        <div>{item.desc}</div>
        {selected ? <Button className={`w-full`} light={true} text={`Choose Plan`} /> : <Button className={`w-full`} text={`Choose Plan`} />}
      </div>
    </div>
  );
};

export default PlanList;
