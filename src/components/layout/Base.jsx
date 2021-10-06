import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { ReactComponent as dashboardIcon } from '../../assets/dashboard.svg';
import { ReactComponent as assetsIcon } from '../../assets/truck-fast-gray.svg';
import { ReactComponent as fieldsIcon } from '../../assets/location-gray.svg';
import { ReactComponent as surveysIcon } from '../../assets/document-gray.svg';
import { ReactComponent as reportsIcon } from '../../assets/reports-gray.svg';
import { ReactComponent as financesIcon } from '../../assets/finances-gray.svg';
import { ReactComponent as settingsIcon } from '../../assets/settings-gray.svg';

import Content from './content';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: dashboardIcon, current: true },
  { name: 'Assets', href: '/assets', icon: assetsIcon, current: false },
  { name: 'Field Configuration', href: '/field-configuration', icon: fieldsIcon, current: false },
  { name: 'Survey & Rewards', href: '/survey-rewards', icon: surveysIcon, current: false },
  { name: 'Reports', href: '/reports', icon: reportsIcon, current: false },
  { name: 'Finances', href: '/finances', icon: financesIcon, current: false },
  { name: 'Settings', href: '/settings', icon: settingsIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Base = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navItems, setNavItems] = useState(navigation);

  useEffect(() => {
    setNavItems(
      navItems.map(item => {
        item.current = item.name
          .replace(' ', '-')
          .replace('&', '')
          .replace(' ', '')
          .toLocaleLowerCase()
          .includes(location.pathname.split('/')[1].toLocaleLowerCase());
        return item;
      }),
      setSidebarOpen(false),
    ); // eslint-disable-next-line
  }, [location]);

  return (
    <div className='h-screen flex overflow-hidden'>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as='div' className='fixed inset-0 flex z-40 md:hidden' onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative flex-1 flex flex-col max-w-xs w-full bg-gray-100'>
              <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='absolute top-0 right-0 -mr-12 pt-2'>
                  <button
                    type='button'
                    className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex-1 h-0 pt-12 pb-4 overflow-y-auto'>
                <div className='flex items-center flex-shrink-0 px-6'>
                  <img className='h-10 w-auto' src={logo} alt='Chekkit Logo' />
                </div>
                <nav className='mt-12 flex-1 bg-gray-100 space-y-4'>
                  {navItems.map(item => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-brand_blue text-white' : 'text-gray-400 hover:bg-brand_blue hover:opacity-25 hover:text-white',
                        'group flex items-center p-6 mr-6 text-sm font-medium rounded-r-3xl',
                      )}
                    >
                      <item.icon
                        className={classNames(item.current ? 'text-white' : 'text-gray-400 group-hover:text-white', 'mr-4 flex-shrink-0 h-6 w-6')}
                        aria-hidden='true'
                      />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14'>{/* Force sidebar to shrink to fit close icon */}</div>
        </Dialog>
      </Transition.Root>

      <div className='hidden md:flex md:flex-shrink-0'>
        <div className='flex flex-col w-64'>
          <div className='flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100'>
            <div className='flex-1 flex flex-col pt-12 pb-4 overflow-y-auto'>
              <div className='flex items-center flex-shrink-0 px-6'>
                <img className='h-10 w-auto' src={logo} alt='Chekkit Logo' />
              </div>
              <nav className='mt-12 flex-1 bg-gray-100 space-y-4'>
                {navItems.map(item => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current ? 'bg-brand_blue text-white' : 'text-gray-400 hover:bg-brand_blue hover:opacity-25 hover:text-white',
                      'group flex items-center p-6 mr-6 text-sm font-medium rounded-r-3xl',
                    )}
                  >
                    <item.icon
                      className={classNames(item.current ? 'text-white' : 'text-gray-400 group-hover:text-white', 'mr-4 flex-shrink-0 h-6 w-6')}
                      aria-hidden='true'
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-0 flex-1 overflow-hidden'>
        <div className='md:hidden pl-1 py-4 sm:pl-3 sm:pt-3 flex items-center'>
          <button
            type='button'
            className='-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none '
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <MenuIcon className='h-6 w-6' aria-hidden='true' />
          </button>
          <img className='h-8 w-auto' src={logo} alt='Chekkit Logo' />
        </div>
        <main className='flex-1 relative z-0 overflow-y-auto focus:outline-none bg-dash'>
          {/* Content */}
          <Content />
          {/* /End of Content */}
        </main>
      </div>
    </div>
  );
};

export default Base;
