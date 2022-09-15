import { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { MdMenu, MdClose } from 'react-icons/md';
import { Link, useLocation, useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useDispatch, useSelector } from 'react-redux';

import { UserActions } from '../../states/actions';

import Logo from '../fragments/logo';

import { ReactComponent as overviewIcon } from '../../assets/finances-gray.svg';
import { ReactComponent as Icon } from '../../assets/document-gray.svg';
// import { ReactComponent as SettingsIcon } from '../../assets/settings.svg';
// import { ReactComponent as SignoutIcon } from '../../assets/signout.svg';

import Content from './content';

const navigation = [
  { name: 'Overview', href: '/overview', icon: overviewIcon, current: false },
  { name: 'Asset Management', href: '/asset-management', icon: Icon, current: false, sub: false },
  { name: 'Connect Plus', href: '/connect-plus', icon: Icon, current: false, sub: false },
  { name: 'Retail & POS', href: '/retail-pos', icon: Icon, current: false, sub: false },
  { name: 'Settings', href: '/settings', icon: Icon, current: false, sub: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Base = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [navItems, setNavItems] = useState(navigation);
  const [products, setProducts] = useState(navigation);

  const signout = () => {
    dispatch(UserActions.signOut());
    localStorage.removeItem('chekkit-act');
    history.push('/auth/signin');
  };

  useEffect(() => {
    if (location.pathname.split('/')[1].toLocaleLowerCase().includes('overview') || location.pathname.split('/')[1].toLocaleLowerCase().includes('settings')) {
      setProducts(
        products.map(item => {
          item.current = item.name
            .replace(' ', '-')
            .replace('&', '')
            .replace(' ', '')
            .toLocaleLowerCase()
            .includes(location.pathname.split('/')[1].toLocaleLowerCase());
          return item;
        }),
      );
    } else {
      setNavItems(
        navItems
          .sort(function (x, y) {
            return y.name.includes(user.company.subscription?.plan?.product?.name) - x.name.includes(user.company.subscription?.plan?.product?.name);
          })
          .map(item => {
            item.current = item.name
              .replace(' ', '-')
              .replace('&', '')
              .replace(' ', '')
              .toLocaleLowerCase()
              .includes(location.pathname.split('/')[1].toLocaleLowerCase());
            return item;
          }),
      );
    }
    // eslint-disable-next-line
  }, [location, user.company.subscription]);

  return (
    <div className='min-h-screen flex flex-col'>
      <Disclosure as='nav' className='bg-white'>
        {({ open }) => (
          <>
            <div className='p-4 md:px-12 bg-white border-b border-gray-100'>
              <div className='flex justify-between items-center'>
                <Logo size={180} />
                <div className='flex items-center space-x-3 sm:space-x-6'>
                  <div className='flex items-center lg:hidden'>
                    <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? <MdClose className='block h-6 w-6' aria-hidden='true' /> : <MdMenu className='block h-6 w-6' aria-hidden='true' />}
                    </Disclosure.Button>
                  </div>
                  <div className='hidden lg:flex items-center'>
                    <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none'>
                      <span className='sr-only'>Open main menu</span>
                      <MdMenu className='block h-6 w-6' aria-hidden='true' />
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className=''>
              <FadeIn className={`flex flex-col space-y-6 lg:hidden shadow-lg p-4 md:px-12 xl:px-28`}>
                {products
                  .filter(i => i.name === 'Overview')
                  .map(item => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-brand_blue text-white' : 'text-gray-400 hover:bg-brand_blue hover:opacity-25 hover:text-white',
                        'group flex items-center p-4 text-sm font-medium rounded-xl select-none',
                      )}
                    >
                      <item.icon
                        className={classNames(item.current ? 'text-white' : 'text-gray-400 group-hover:text-white', 'mr-4 flex-shrink-0 h-6 w-6')}
                        aria-hidden='true'
                      />
                      {item.name}
                    </Link>
                  ))}
                {navItems
                  .filter(i => i.name !== 'Overview' && i.name !== 'Settings')
                  .map(item => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-brand_blue text-white' : 'text-gray-400 hover:bg-brand_blue hover:opacity-25 hover:text-white',
                        'group flex items-center p-4 text-sm font-medium rounded-xl select-none',
                      )}
                    >
                      <item.icon
                        className={classNames(item.current ? 'text-white' : 'text-gray-400 group-hover:text-white', 'mr-4 flex-shrink-0 h-6 w-6')}
                        aria-hidden='true'
                      />
                      {item.name}
                    </Link>
                  ))}
                {products
                  .filter(i => i.name === 'Settings')
                  .map(item => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-brand_blue text-white' : 'text-gray-400 hover:bg-brand_blue hover:opacity-25 hover:text-white',
                        'group flex items-center p-4 text-sm font-medium rounded-xl select-none',
                      )}
                    >
                      <item.icon
                        className={classNames(item.current ? 'text-white' : 'text-gray-400 group-hover:text-white', 'mr-4 flex-shrink-0 h-6 w-6')}
                        aria-hidden='true'
                      />
                      {item.name}
                    </Link>
                  ))}
                <div
                  onClick={signout}
                  className={classNames(
                    'text-gray-400 hover:bg-brand_blue hover:opacity-25 hover:text-white',
                    'group flex items-center p-4 text-sm font-medium rounded-xl cursor-pointer select-none',
                  )}
                >
                  Sign Out
                </div>
              </FadeIn>

              <FadeIn className={`hidden lg:flex justify-between shadow p-4 md:px-12 xl:px-28`}>
                {products
                  .filter(i => i.name === 'Overview')
                  .map(item => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-brand_blue text-white' : 'text-gray-400 hover:bg-brand_blue hover:opacity-25 hover:text-white',
                        'group flex items-center p-4 text-sm font-medium rounded-xl select-none',
                      )}
                    >
                      <item.icon
                        className={classNames(item.current ? 'text-white' : 'text-gray-400 group-hover:text-white', 'mr-4 flex-shrink-0 h-6 w-6')}
                        aria-hidden='true'
                      />
                      {item.name}
                    </Link>
                  ))}
                {navItems
                  .filter(i => i.name !== 'Overview' && i.name !== 'Settings')
                  .map(item => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-brand_blue text-white' : 'text-gray-400 hover:bg-brand_blue hover:opacity-25 hover:text-white',
                        'group flex items-center p-4 text-sm font-medium rounded-xl select-none',
                      )}
                    >
                      <item.icon
                        className={classNames(item.current ? 'text-white' : 'text-gray-400 group-hover:text-white', 'mr-4 flex-shrink-0 h-6 w-6')}
                        aria-hidden='true'
                      />
                      {item.name}
                    </Link>
                  ))}
                {products
                  .filter(i => i.name === 'Settings')
                  .map(item => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-brand_blue text-white' : 'text-gray-400 hover:bg-brand_blue hover:opacity-25 hover:text-white',
                        'group flex items-center p-4 text-sm font-medium rounded-xl select-none',
                      )}
                    >
                      <item.icon
                        className={classNames(item.current ? 'text-white' : 'text-gray-400 group-hover:text-white', 'mr-4 flex-shrink-0 h-6 w-6')}
                        aria-hidden='true'
                      />
                      {item.name}
                    </Link>
                  ))}
                <div
                  onClick={signout}
                  className={classNames(
                    'text-gray-400 hover:bg-brand_blue hover:opacity-25 hover:text-white',
                    'group flex items-center p-4 text-sm font-medium rounded-xl cursor-pointer select-none',
                  )}
                >
                  Sign Out
                </div>
              </FadeIn>
            </Disclosure.Panel>

            <main className='flex-1 relative z-0 overflow-y-auto focus:outline-none'>
              <Content />
            </main>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Base;
