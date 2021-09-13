import React from 'react';

import Heading from '../Heading';
import Text from '../Text';

const ManagementList = ({ items }) => {
  return (
    <div className={`flex flex-col sm:flex-row space-y-12 sm:space-x-12 sm:space-y-0 max-w-3xl`}>
      {items.map((item, idx) => {
        return <Item key={idx} item={item} />;
      })}
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <div className={`space-y-4 p-6 border border-gray-300 rounded-lg max-w-sm cursor-pointer focus:border-brand_blue`}>
      <img src={item.icon} alt={`asset`} />
      <Heading className={`font-semibold`} size={3} title={item.title} />
      <Text className={`text-base`} value={item.description} />
    </div>
  );
};

export default ManagementList;
