import React, { useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

import Heading from '../heading';
import Text from '../text';

const ManagementList = ({ items }) => {
  const [selected, setSelected] = useState(0);

  const handleClick = idx => {
    setSelected(idx);
  };

  return (
    <FadeIn className={`flex flex-col lg:flex-row space-y-12 lg:space-x-12 lg:space-y-0 max-w-3xl justify-center`}>
      {items.map((item, idx) => {
        return <Item onClick={() => handleClick(idx)} selected={selected === idx} key={idx} item={item} />;
      })}
    </FadeIn>
  );
};

const Item = ({ item, onClick, selected }) => {
  return (
    <div
      onClick={onClick}
      className={`space-y-4 p-6 border-2 border-gray-300 rounded-lg max-w-sm cursor-pointer ${selected ? `border-brand_blue shadow-lg` : ``}`}
    >
      <item.icon />
      <Heading className={`font-medium`} size={3} title={item.title} />
      <Text className={`text-base`} value={item.description} />
    </div>
  );
};

export default ManagementList;
