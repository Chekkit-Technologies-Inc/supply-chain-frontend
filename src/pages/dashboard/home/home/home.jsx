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
              <span className='text-brand_blue capitalize'>{`${user.name.split(' ')[0]}`}</span>
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
                  <span
                    key={idx}
                    onClick={() => {
                      if (!user?.company?.subscription?.status) {
                        return;
                      } else {
                        window.open(`${link.url}/${user?.token}`, '_self');
                      }
                    }}
                    className={`w-full max-w-md h-64 rounded-3xl bg-white bg shadow flex flex-col items-center justify-center cursor-pointer font-semibold hover:shadow-lg p-6 text-center border-2 border-brand_blue text-brand_blue text-lg space-y-4`}
                  >
                    <div className={`space-y-4 flex flex-col justify-center items-center ${!user?.company?.subscription?.status ? ' opacity-50' : ''}`}>
                      <div className='w-10 h-10'>
                        <link.icon className='w-full h-full' />
                      </div>
                      <div>{link.name}</div>
                      <div className='font-normal text-sm'>{link.desc}</div>
                    </div>
                    <div
                      onClick={() => history.push('/plans')}
                      className={`w-40 h-12 bg-brand_blue text-gray-50 px-4 py-2 shadow rounded-md cursor-pointer hover:shadow-lg ${
                        user?.company?.subscription?.status ? 'hidden' : ''
                      }`}
                    >
                      Select Plan
                    </div>
                  </span>
                );
              })}
            {links
              .filter(d => d.name !== 'Asset Management' && d.name !== 'Inventory Management' && d.name !== 'Overview')
              .map((link, idx) => {
                return (
                  <span
                    // onClick={() => {
                    //   if (!user?.company?.subscription?.status) {
                    //     return;
                    //   }
                    //   history.push(link.url);
                    // }}
                    key={idx}
                    className={`w-full max-w-md h-64 rounded-3xl bg-white bg shadow flex flex-col items-center justify-center cursor-pointer font-semibold hover:shadow-lg p-6 text-center border-2 border-brand_blue text-brand_blue text-lg space-y-2`}
                  >
                    <div
                      className={`space-y-2 flex flex-col justify-center items-center opacity-30 ${!user?.company?.subscription?.status ? ' opacity-50' : ''}`}
                    >
                      <div className='w-10 h-10'>
                        <link.icon className='w-full h-full' />
                      </div>
                      <div>{link.name}</div>
                      <div className='font-normal text-sm'>{link.desc}</div>
                      <div className='font-normal text-sm'>Available soon...</div>
                    </div>
                    <div
                      onClick={() => history.push('/plans')}
                      className={`w-40 h-12 bg-brand_blue text-gray-50 px-4 py-2 shadow rounded-md cursor-pointer hover:shadow-lg ${
                        user?.company?.subscription?.status ? 'hidden' : ''
                      }`}
                    >
                      Select Plan
                    </div>
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
