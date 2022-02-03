import React from 'react';
// import FadeIn from 'react-fade-in/lib/FadeIn';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ReactComponent as ItemAssets } from '../../../../assets/item-assets.svg';
import { ReactComponent as ItemInventory } from '../../../../assets/item-inventory.svg';

const links = [
  {
    name: 'Asset Management',
    icon: ItemAssets,
    desc: 'Track and manage all asset in one place',
    video: '#',
    selected: false,
    url: process.env.REACT_APP_ASSET_MANAGEMNET_URL + '/as',
  },
  {
    name: 'Inventory Management',
    icon: ItemInventory,
    desc: 'Manage all assets in your warehouse',
    video: '#',
    selected: false,
    url: process.env.REACT_APP_ASSET_MANAGEMNET_URL + '/inv',
  },
];

const AMBase = () => {
  const user = useSelector(state => state.user);
  const history = useHistory();

  return (
    <div className='bg p-4 md:px-12 py-16 min-h-screen w-full'>
      <div className='text-sm text-brand_blue mb-6 -mt-6'>
        <span onClick={() => history.push('/home')} className='text-brand_blue_light cursor-pointer'>
          Main menu{' '}
        </span>
        <span className='text-brand_blue_light'>| </span>
        <span onClick={() => history.push('/asset-management')} className='text-blue-500 cursor-pointer'>
          Asset and Inventory Management
        </span>
      </div>
      <div className='text-2xl text-brand_blue mb-12'>Asset & Inventory Management</div>
      <div className={`flex flex-wrap justify-center gap-12 mt-12  w-full`}>
        {links.map((link, idx) => {
          return (
            <a
              key={idx}
              target={`_blank`}
              href={`${link.url}/${user?.token}`}
              style={{ width: '500px' }}
              className={`w-full max-w-md h-64 rounded-3xl bg-white bg shadow flex flex-col items-center justify-center cursor-pointer font-semibold hover:shadow-lg p-6 text-center border-2 border-brand_blue text-brand_blue text-lg space-y-4`}
            >
              <div className='w-10 h-10'>
                <link.icon className='w-full h-full' />
              </div>
              <div>{link.name}</div>
              <div className='font-normal text-sm'>{link.desc}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AMBase;
