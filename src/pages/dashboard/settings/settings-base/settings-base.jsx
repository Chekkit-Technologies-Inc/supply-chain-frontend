import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const links = [
  { name: 'Contact Chekkit', url: 'tel:000400404' },
  { name: 'Help Center', url: '/settings/help' },
  { name: 'User Management Center', url: '/settings/user-management' },
];

const SettingsBase = () => {
  const user = useSelector(state => state.user);
  const history = useHistory();

  const isAdmin = (prev, next) => {
    if (next.name === 'User Management Center' && !user.isAdminUser) {
      return prev;
    }
    return [...prev, next];
  };

  return (
    <FadeIn className='bg p-4 md:px-12 py-16 min-h-screen w-full'>
      <div className='text-sm text-brand_blue mb-6 -mt-6'>
        <span onClick={() => history.push('/home')} className='text-brand_blue_light cursor-pointer'>
          Main menu{' '}
        </span>
        <span className='text-brand_blue_light'>| </span>
        <span onClick={() => history.push('/settings')} className='text-blue-500 cursor-pointer'>
          Settings
        </span>
      </div>
      <div className='text-2xl text-brand_blue mb-12'>Settings</div>
      <FadeIn className={`flex flex-wrap justify-center gap-12 mt-12  w-full`}>
        {links.reduce(isAdmin, []).map((link, idx) => {
          return (
            <>
              {link.name !== 'Contact Chekkit' ? (
                <Link
                  key={idx}
                  to={link.url}
                  style={{ width: '500px' }}
                  className={`w-full max-w-md h-64 rounded-3xl bg-white bg shadow flex flex-col items-center justify-center cursor-pointer font-semibold hover:shadow-lg p-6 text-center border-2 border-brand_blue text-brand_blue text-lg space-y-4`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={idx}
                  href={link.url}
                  style={{ width: '500px' }}
                  className={`w-full max-w-md h-64 rounded-3xl bg-white bg shadow flex flex-col items-center justify-center cursor-pointer font-semibold hover:shadow-lg p-6 text-center border-2 border-brand_blue text-brand_blue text-lg space-y-4`}
                >
                  {link.name}
                </a>
              )}
            </>
          );
        })}
      </FadeIn>
    </FadeIn>
  );
};

export default SettingsBase;
