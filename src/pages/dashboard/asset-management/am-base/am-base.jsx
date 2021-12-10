import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useSelector } from 'react-redux';

const links = [
  { name: 'Asset Management & Tracking', url: 'http://localhost:3001/#/as' },
  { name: 'Inventory Management', url: '/asset-management/#' },
];

const AMBase = () => {
  const user = useSelector(state => state.user);
  return (
    <FadeIn
      className={`flex flex-col justify-start items-start
     space-y-6 px-4 md:px-12 py-8 min-h-screen w-full`}
    >
      <div className={`font-bold text-2xl text-brand_blue`}>Asset Management</div>
      <FadeIn className={`max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12`}>
        {links.map((link, idx) => {
          return (
            <a
              key={idx}
              href={`${link.url}/${user?.token}`}
              className={`w-full h-64 rounded-2xl bg-white shadow flex items-center justify-center border cursor-pointer font-semibold hover:shadow-lg p-6 text-center`}
            >
              {link.name}
            </a>
          );
        })}
      </FadeIn>
    </FadeIn>
  );
};

export default AMBase;
