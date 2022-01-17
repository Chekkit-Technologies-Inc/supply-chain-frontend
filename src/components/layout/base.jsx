import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MdMenu, MdClose } from 'react-icons/md';
import { Link, useLocation, useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useDispatch, useSelector } from 'react-redux';

import { UserActions } from '../../states/actions';

import Logo from '../fragments/logo';
import InputBox from '../fragments/input-box';

import { ReactComponent as overviewIcon } from '../../assets/finances-gray.svg';
import { ReactComponent as Icon } from '../../assets/document-gray.svg';
import { ReactComponent as settingsIcon } from '../../assets/settings-gray.svg';

import Content from './content';

const navigation = [
  { name: 'Overview', href: '/overview', icon: overviewIcon, current: false },
  { name: 'Asset Management', href: '/asset-management', icon: Icon, current: false, sub: false },
  { name: 'Connect Plus', href: '/connect-plus', icon: Icon, current: false, sub: false },
  { name: 'Engage', href: '/engage', icon: Icon, current: false, sub: false },
  { name: 'Retail & POS', href: '/retail-pos', icon: Icon, current: false, sub: true },
  // { name: 'Reports', href: '/reports', icon: Icon, current: false },
  { name: 'Settings', href: '/settings', icon: settingsIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Base = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navItems, setNavItems] = useState(navigation);
  const [products, setProducts] = useState(navigation);
  const [phrase, setPhrase] = useState('');

  const handleInputChange = event => {
    const { value } = event.target;
    setPhrase(value);
  };

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
    setSidebarOpen(false);
    // eslint-disable-next-line
  }, [location, user.company.subscription]);

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
                    <MdClose className='h-6 w-6 text-white' aria-hidden='true' />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex-1 h-0 pt-6 pb-4 overflow-y-auto'>
                <div className='flex items-center flex-shrink-0 px-6'>
                  <Logo size={150} />
                </div>
                <FadeIn className='mt-2  flex-1 bg-gray-100 space-y-4 flex flex-col justify-between'>
                  {products
                    .filter(i => i.name === 'Overview')
                    .map(item => (
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
                  {navItems
                    .filter(i => i.name !== 'Overview' && i.name !== 'Settings')
                    .map(item => (
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
                  {products
                    .filter(i => i.name === 'Settings')
                    .map(item => (
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
                  <div onClick={signout} className={`text-red-500 font-semibold px-6 mb-6 cursor-pointer`}>
                    Sign Out
                  </div>
                </FadeIn>
              </div>
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14'>{/* Force sidebar to shrink to fit close icon */}</div>
        </Dialog>
      </Transition.Root>

      <div className='hidden md:flex md:flex-shrink-0'>
        <div className='flex flex-col w-64'>
          <div className='flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100'>
            <div className='flex-1 flex flex-col pt-6 pb-4 overflow-y-auto'>
              <div className='flex items-center flex-shrink-0 px-6'>
                <Logo size={150} />
              </div>
              <FadeIn className='mt-2 flex-1 bg-gray-100 space-y-4 flex flex-col justify-between'>
                {products
                  .filter(i => i.name === 'Overview')
                  .map(item => (
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
                {navItems
                  .filter(i => i.name !== 'Overview' && i.name !== 'Settings')
                  .map(item => (
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
                {products
                  .filter(i => i.name === 'Settings')
                  .map(item => (
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
                <div onClick={signout} className={`text-red-500 font-semibold px-6 mb-6 cursor-pointer`}>
                  Sign Out
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-0 flex-1 overflow-hidden'>
        <div className='md:hidden pl-1 pb-2 sm:pl-3 sm:pt-3 flex items-center'>
          <button
            type='button'
            className='-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none '
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <MdMenu className='h-6 w-6' aria-hidden='true' />
          </button>
          <Logo size={150} />
        </div>
        <main className='flex-1 relative z-0 overflow-y-auto focus:outline-none bg-blue-50'>
          <div className={`flex flex-col xl:flex-row space-y-6 xl:space-y-0 items-center justify-between px-4 md:px-12 py-6 shadow bg-white z-10`}>
            <div className={`w-full xl:max-w-lg`}>
              <InputBox value={phrase} onValueChange={handleInputChange} name={`phrase`} placeholder={`Search...`} variant={4} className={``} type={`search`} />
            </div>
            <div
              className={`flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between w-full xl:w-auto items-start sm:items-center sm:space-x-6 flex-shrink-0 xl:ml-6`}
            >
              <div
                className={`border border-brand_blue text-brand_blue px-4 py-2 rounded-lg cursor-pointer hover:bg-brand_blue hover:text-white hover:shadow-lg`}
              >
                View Product Demo
              </div>
              <div
                className={`border border-brand_blue text-brand_blue px-4 py-2 rounded-lg cursor-pointer hover:bg-brand_blue hover:text-white hover:shadow-lg`}
              >
                Company Profile
              </div>
            </div>
          </div>
          {/* Content */}
          <Content />
          {/* /End of Content */}
        </main>
      </div>
    </div>
  );
};

export default Base;
