import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useSelector } from 'react-redux';

import Heading from '../../../../components/fragments/heading';

const links = [
  { name: 'Asset Management & Tracking', desc: 'Track and manage all asset in one place', url: process.env.REACT_APP_ASSET_MANAGEMNET_URL + '/as' },
  { name: 'Connect Plus',desc: 'Connect with manufactures, distributors and retailers in a hub',  url: '#' },
  { name: 'Retail & POS',desc: 'Transaction and payment gateways at retail point',  url: '#' },
];

const OverviewBase = () => {
  const user = useSelector(state => state.user);
  return (
    <FadeIn
      className={`flex flex-col justify-start items-center
     space-y-2 p-6 py-16 min-h-screen w-full mx-auto`}
    >
      {user && (
        <>
          <Heading className={`text-brand_blue font-semibold text-center capitalize`} title={`Hello ${user.name.split(' ')[0]}, welcome to your account`} />
          <Heading className={`text-brand_blue text-center`} title={`What will you like to do today`} size={2} />
          <FadeIn className={`grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12 mt-12  w-full`}>
            {links.filter(d => d.name === 'Asset Management & Tracking').map((link, idx) => {
              return (
                <a
                  key={idx}
                  target={`_blank`}
                  href={`${link.url}/${user?.token}`}
                  className={`w-full h-64 rounded-2xl bg-white bg shadow flex flex-col items-center justify-center cursor-pointer font-semibold hover:shadow-lg p-6 text-center border-2 border-brand_blue text-brand_blue text-lg`}
                >
                  <div>{link.name}</div>
                  <div className='font-normal text-sm'>{link.desc}</div>
                  <div className='font-medium mt-6 text-sm italic'></div>
                </a>
              );
            })}
            {links.filter(d => d.name !== 'Asset Management & Tracking').map((link, idx) => {
              return (
                <span
                  key={idx}
                  className={`w-full h-64 rounded-2xl bg-white bg shadow flex flex-col items-center justify-center cursor-pointer font-semibold hover:shadow-lg p-6 text-center border-2 border-brand_blue text-brand_blue text-lg`}
                >
                  <div>{link.name}</div>
                  <div className='font-normal text-sm'>{link.desc}</div>
                  <div className='font-medium mt-6 text-sm italic'>Coming soon</div>
                </span>
              );
            })}
          </FadeIn>
        </>
      )}
    </FadeIn>
  );
};

export default OverviewBase;
