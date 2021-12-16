import React, { useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

import { ReactComponent as Product } from '../../../../assets/product.svg';

import Button from '../../../../components/fragments/button';

const links = [
  { name: 'Create Product and Batches', url: '/#/consumer-intelligence/#' },
  { name: 'Generate & Request Sticker Labels', url: '/#/consumer-intelligence/#' },
  { name: 'Setup & Manage Survey Questions', url: '/#/consumer-intelligence/#' },
  { name: 'Setup & Manage Rewards', url: '/#/consumer-intelligence/#' },
  { name: 'Reports', url: '/#/consumer-intelligence/#' },
];

const CIBase = () => {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <FadeIn
      className={`flex flex-col justify-start
space-y-6 px-4 md:px-12 py-8 min-h-screen w-full`}
    >
      {subscribed && (
        <div className='space-y-6'>
          <div className={`font-bold text-2xl text-brand_blue`}>Consumer Intelligence</div>
          <FadeIn className={`grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12`}>
            {links.map((link, idx) => {
              return (
                <a
                  key={idx}
                  href={`${link.url}`}
                  className={`w-full h-64 rounded-2xl bg-white bg shadow flex items-center justify-center cursor-pointer font-semibold hover:shadow-lg p-6 text-center border-2 border-brand_blue text-brand_blue text-lg`}
                >
                  {link.name}
                </a>
              );
            })}
          </FadeIn>
        </div>
      )}
      {!subscribed && (
        <div className='flex flex-col items-center justify-center space-y-10 p-4 max-w-4xl w-full mx-auto'>
          <div className={`font-bold text-2xl text-brand_blue`}>Consumer Intelligence</div>
          <div className='w-full '>
            <Product className='w-full object-cover' />
          </div>
          <div className='text-center text-gray-600'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, porro? Odio atque nihil possimus quae delectus harum sed officia nesciunt nam quam
            corporis libero illo iste fugit dolore, dolores accusamus ea ipsum. Quos, unde?
          </div>
          <Button text={`Activate Plan`} onClick={() => setSubscribed(true)} />
        </div>
      )}
    </FadeIn>
  );
};

export default CIBase;
