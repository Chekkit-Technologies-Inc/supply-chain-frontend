import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';

const links = [
  { name: 'Edit my account', url: '/settings/#' },
  { name: 'Contact Chekkit', url: '/settings/#' },
  { name: 'View Help Center', url: '/settings/#' },
  { name: 'User Management Center', url: '/settings/user-management' },
];

const SettingsBase = () => {
  return (
    <FadeIn
      className={`flex flex-col justify-start
space-y-6 px-4 md:px-12 py-8 min-h-screen w-full `}
    >
      <div className={`font-bold text-2xl text-brand_blue`}>Settings</div>
      <FadeIn className={`grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12`}>
        {links.map((link, idx) => {
          return (
            <Link
              key={idx}
              to={link.url}
              className={`w-full h-64 rounded-2xl bg-white bg shadow flex items-center justify-center cursor-pointer font-semibold hover:shadow-lg p-6 text-center border-2 border-brand_blue text-brand_blue text-lg`}
            >
              {link.name}
            </Link>
          );
        })}
      </FadeIn>
    </FadeIn>
  );
};

export default SettingsBase;
