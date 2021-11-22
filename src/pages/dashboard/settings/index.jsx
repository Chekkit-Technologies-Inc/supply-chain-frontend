import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';

const links = [
  { name: 'Edit my account', url: '/settings/#' },
  { name: 'Change app color', url: '/settings/#' },
  { name: 'Contact Chekkit', url: '/settings/#' },
  { name: 'View Help Center', url: '/settings/#' },
  { name: 'User Management Center', url: '/settings/#' },
];

const Settings = () => {
  return (
    <Switch>
      <Route exact path={'/settings'}>
        <FadeIn
          className={`flex flex-col justify-start items-start
space-y-6 px-4 md:px-12 py-8 min-h-screen w-full `}
        >
          <div className={`font-bold text-2xl text-brand_blue`}>Settings</div>
          <FadeIn className={`max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12`}>
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
      </Route>
      <Redirect to={`/404`} />
    </Switch>
  );
};

export default Settings;
