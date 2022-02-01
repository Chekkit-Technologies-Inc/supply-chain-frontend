import React, { useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useDispatch } from 'react-redux';

import Button from '../button';
import { PlanActions } from '../../../states/actions';

const PlanList = ({ items, onComplete }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(1);

  const handleClick = idx => {
    setSelected(idx);
  };

  const handleButtonClick = plan => {
    if (plan) {
      dispatch(PlanActions.subcribeToPlan(plan.id))
        .then(() => onComplete(plan))
        .catch(console.log);
    }
  };

  return (
    <FadeIn className={`flex flex-col lg:flex-row justify-center items-center w-full gap-16 lg:gap-8`}>
      {items.map((item, idx) => {
        return <Item onClick={() => handleClick(idx)} handleButtonClick={handleButtonClick} selected={selected === idx} key={idx} item={item} />;
      })}
    </FadeIn>
  );
};

const Item = ({ item, onClick, selected, handleButtonClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${selected ? `card` : ``} flex flex-col rounded-3xl cursor-pointer w-full transform ${
        selected ? `bg-brand_blue p-6 text-white z-10` : `bg-white p-6 text-brand_blue translate-y-12`
      }`}
    >
      <div className='font-semibold text-lg'>{item.type}</div>
      <div className='mt-6 font-semibold text-sm'>{item.description}</div>
      <ul className='py-6 space-y-4 text-sm'>
        {item.features.map((f, i) => {
          return (
            <li
              key={i}
              className={`${f.included ? `` : `opacity-50 text-gray-400`} ${selected ? `small-check-light` : `small-check-dark`} transform translate-x-4`}
            >
              {f.title}
            </li>
          );
        })}
      </ul>
      <div className='pb-6 pt-4'>
        <span className='text-lg font-semibold'>{item.price}</span>
        <span className='text-sm text-gray-400'> /year</span>
      </div>
      {selected ? (
        <Button className={`w-60 mx-auto`} light={true} text={`Request Plan`} onClick={() => handleButtonClick(item)} variant={1} />
      ) : (
        <Button className={`w-60 mx-auto`} text={`Select Plan`} />
      )}
    </div>
  );
};

export default PlanList;
