import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';

const links = [
  { name: 'View Feed', url: '/connect-plus/#' },
  { name: 'Chat / Messages', url: '/connect-plus/#' },
  { name: 'Order Management', url: '/connect-plus/#' },
  { name: 'My Profile', url: '/connect-plus/#' },
  { name: 'Manage Product Listings', url: '/connect-plus/#' },
  { name: 'Invoices & Payment', url: '/connect-plus/#' },
];

const CPBase = () => {
  return (
    <FadeIn
      className={`flex flex-col justify-start
space-y-6 px-4 md:px-12 py-8 min-h-screen w-full `}
    >
      <div className={`font-bold text-2xl text-brand_blue`}>Connect++</div>
      <FadeIn className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12`}>
        {links.map((link, idx) => {
          return (
            <Link
              key={idx}
              to={link.url}
              className={`w-full h-64 rounded-2xl bg-white shadow flex items-center justify-center border cursor-pointer font-semibold hover:shadow-lg p-6 text-center`}
            >
              {link.name}
            </Link>
          );
        })}
      </FadeIn>
    </FadeIn>
  );
};

export default CPBase;
