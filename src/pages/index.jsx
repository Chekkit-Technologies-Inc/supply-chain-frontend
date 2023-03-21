import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useSelector } from 'react-redux';

import { Disclosure } from '@headlessui/react';
import { MdMenu, MdClose } from 'react-icons/md';

import manufacturers from '../assets/manufacturers.png';
import distributors from '../assets/distributors.png';
import retailers from '../assets/retailers.png';

import Logo from '../components/fragments/logo';
import Button from '../components/fragments/button';

const IndexPage = () => {
  const history = useHistory();
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (user?.isAuthorized) {
      history.push('/home');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Disclosure as='nav' className='bg-white'>
        {({ open }) => (
          <>
            <div className='p-6 lg:px-16 bg-gray-50'>
              <div className='flex justify-between items-center'>
                <Logo size={180} />
                <div className='hidden sm:ml-6 sm:flex sm:items-center'>
                  <div className={`flex space-x-6`}>
                    <Button text={`Log In`} type={`secondary`} onClick={() => history.push('/auth/signin')} />
                    <Button text={`Sign Up`} onClick={() => history.push('/pick-modules')} />
                  </div>
                </div>
                <div className='flex items-center sm:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? <MdClose className='block h-6 w-6' aria-hidden='true' /> : <MdMenu className='block h-6 w-6' aria-hidden='true' />}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className='sm:hidden'>
              <div className={`flex flex-col space-y-6 p-6`}>
                <Button className={'w-full'} text={`Log In`} type={`secondary`} onClick={() => history.push('/auth/signin')} />
                <Button className={'w-full'} text={`Sign Up`} onClick={() => history.push('/pick-modules')} />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <FadeIn className='space-y-24 pb-12 pt-0 lg:pt-24'>
        {/*  */}
        <div className={`base-grid-r-one py-24 xl:py-0 lg:pl-16 opacity-100`}>
          <div className='base-grid-r-two col-start-2 col-end-4 row-span-full items-center'>
            <div className='p-6 lg:p-16 col-start-2 col-end-3 row-start-2 row-end-3 space-y-6'>
              <div className='text-3xl 2xl:text-5xl font-semibold text-white'>Manufacturers</div>
              <div className='capitalize text-white max-w-xl 2xl:text-xl'>
                have a focal point of communication and consultation between industry on the one hand, and the government and general public on the other.
              </div>
              <Button onClick={() => history.push('/pick-modules')} text={`Learn more`} light={true} />
            </div>
          </div>

          <div className='col-start-1 col-end-3 row-start-2 row-end-3 px-6 max-w-2xl w-full xl:max-w-max xl:px-0 overflow-hidden rounded-md'>
            <img className='w-full h-full object-cover' src={manufacturers} alt='' />
          </div>
        </div>

        {/*  */}

        <div className={`base-grid-l-one py-24 xl:py-0 lg:pr-16 opacity-100`}>
          <div className='base-grid-l-two col-start-1 col-end-3 row-span-full items-center'>
            <div className='p-6 lg:p-16 col-start-1 col-end-2 row-start-2 row-end-3 space-y-6'>
              <div className='text-3xl 2xl:text-5xl font-semibold text-white'>Distributors</div>
              <div className='capitalize text-white max-w-xl 2xl:text-xl'>
                have a focal point of communication and consultation between industry on the one hand, and the government and general public on the other.
              </div>
              <Button onClick={() => history.push('/pick-modules')} text={`Learn more`} light={true} />
            </div>
          </div>

          <div className='col-start-2 col-end-4 row-start-2 row-end-3 px-6  max-w-2xl w-full xl:max-w-max xl:px-0 overflow-hidden rounded-md'>
            <img className='w-full h-full object-cover' src={distributors} alt='' />
          </div>
        </div>

        {/*  */}

        <div className={`base-grid-r-one py-24 xl:py-0 lg:pl-16 opacity-100`}>
          <div className='base-grid-r-two col-start-2 col-end-4 row-span-full items-center'>
            <div className='p-6 lg:p-16 col-start-2 col-end-3 row-start-2 row-end-3 space-y-6'>
              <div className='text-3xl 2xl:text-5xl font-semibold text-white'>Retailers</div>
              <div className='capitalize text-white max-w-xl 2xl:text-xl'>
                have a focal point of communication and consultation between industry on the one hand, and the government and general public on the other.
              </div>
              <Button onClick={() => history.push('/pick-modules')} text={`Learn more`} light={true} />
            </div>
          </div>

          <div className='col-start-1 col-end-3 row-start-2 row-end-3 px-6 max-w-2xl w-full xl:max-w-max xl:px-0 overflow-hidden rounded-md'>
            <img className='w-full h-full object-cover' src={retailers} alt='' />
          </div>
        </div>
      </FadeIn>
      <div className='text-gray-500 text-sm text-center mb-12'>&copy; {new Date().getUTCFullYear()} Chekkit ChekTrack</div>
    </div>
  );
};

export default IndexPage;
