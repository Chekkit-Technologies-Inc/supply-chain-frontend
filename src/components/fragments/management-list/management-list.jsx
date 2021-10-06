import React, { useState } from 'react';

import Heading from '../heading';
import Text from '../text';

const ManagementList = ({ items }) => {
  const [selected, setSelected] = useState(0);

  const handleClick = idx => {
    setSelected(idx);
  };

  return (
    <div className={`flex flex-col sm:flex-row space-y-12 sm:space-x-12 sm:space-y-0 max-w-3xl`}>
      {items.map((item, idx) => {
        return <Item onClick={() => handleClick(idx)} selected={selected === idx} key={idx} item={item} />;
      })}
    </div>
  );
};

const Item = ({ item, onClick, selected }) => {
  return (
    <div onClick={onClick} className={`space-y-4 p-6 border border-gray-300 rounded-lg max-w-sm cursor-pointer ${selected ? `border border-brand_blue` : ``}`}>
      <img src={item.icon} alt={`asset`} />
      <Heading className={`font-medium`} size={3} title={item.title} />
      <Text className={`text-base`} value={item.description} />
    </div>
  );
};

export default ManagementList;
