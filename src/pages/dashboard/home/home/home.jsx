import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ReactComponent as User } from '../../../../assets/thumbs-user.svg';
import { ReactComponent as ItemOverview } from '../../../../assets/item-overview.svg';
import { ReactComponent as ItemAssets } from '../../../../assets/item-assets.svg';
import { ReactComponent as ItemInventory } from '../../../../assets/item-inventory.svg';
import { ReactComponent as ItemConnect } from '../../../../assets/item-connect.svg';
import { ReactComponent as ItemRetail } from '../../../../assets/item-retail.svg';

const links = [
  {
    name: 'Overview',
    icon: ItemOverview,
    desc: 'Track and manage all asset in one place',
    video: '#',
    selected: false,
    url: '/overview',
  },
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
  {
    name: 'Connect Plus',
    icon: ItemConnect,
    desc: 'Connecct with manufacturers, distributors and retailers in a hub',
    video: '#',
    selected: false,
    url: '/connect-plus',
  },
  { name: 'Retail And POS', icon: ItemRetail, desc: 'Transaction and payment gateways at retail point', video: '#', selected: false, url: '/retail-pos' },
];

const OverviewBase = () => {
  const user = useSelector(state => state.user);
  const history = useHistory();
  return (
    <FadeIn
      className={`flex flex-col justify-start items-center
     space-y-2 p-4 py-16 min-h-screen w-full mx-auto bg`}
    >
      {user && (
        <>
          <div className='space-y-4 flex flex-col items-center justify-center max-w-md text-center mx-auto'>
            <div className='w-20 h-20'>
              <User className='w-full h-full' />
            </div>
            <div className='text-brand_blue_light text-xl font-medium'>
              <span>Great to have you here, </span>
              <span className='text-brand_blue'>{`${user.name.split(' ')[0]}`}</span>
            </div>
            <div className='text-brand_blue_light'>Let’s help you manage your services easily. Select and view any of the services</div>
          </div>
          <div className={`flex flex-wrap justify-center gap-12 mt-12  w-full`}>
            {links
              .filter(d => d.name === 'Overview')
              .map((link, idx) => {
                return (
                  <span
                    onClick={() => history.push(link.url)}
                    key={idx}
                    className={`w-full max-w-md h-64 rounded-3xl bg-white bg shadow flex flex-col items-center justify-center cursor-pointer font-semibold hover:shadow-lg p-6 text-center border-2 border-brand_blue text-brand_blue text-lg space-y-4`}
                  >
                    <div className='w-10 h-10'>
                      <link.icon className='w-full h-full' />
                    </div>
                    <div>{link.name}</div>
                    <div className='font-normal text-sm'>{link.desc}</div>
                  </span>
                );
              })}
            {links
              .filter(d => d.name === 'Asset Management' || d.name === 'Inventory Management')
              .map((link, idx) => {
                return (
                  <a
                    key={idx}
                    target={`_blank`}
                    href={`${link.url}/${user?.token}`}
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
            {links
              .filter(d => d.name !== 'Asset Management' && d.name !== 'Inventory Management' && d.name !== 'Overview')
              .map((link, idx) => {
                return (
                  <span
                    onClick={() => history.push(link.url)}
                    key={idx}
                    className={`w-full max-w-md h-64 rounded-3xl bg-white bg shadow flex flex-col items-center justify-center cursor-pointer font-semibold hover:shadow-lg p-6 text-center border-2 border-brand_blue text-brand_blue text-lg space-y-4`}
                  >
                    <div className='w-10 h-10'>
                      <link.icon className='w-full h-full' />
                    </div>
                    <div>{link.name}</div>
                    <div className='font-normal text-sm'>{link.desc}</div>
                  </span>
                );
              })}
          </div>
        </>
      )}
    </FadeIn>
  );
};

export default OverviewBase;
