import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import Button from '../button';
import InputBox from '../input-box';
import Heading from '../heading';

const initialInviteData = { name: '', email: '', role: '' };

const AppDialog = ({ open, setOpen, type, title, action }) => {
  const cancelButtonRef = useRef(null);
  const [inviteData, setInviteData] = useState(initialInviteData);

  const onSubmit = e => {
    e.preventDefault();
    if (action) {
      if (type === 'user-invite') {
        action(inviteData);
        setInviteData(initialInviteData);
      }
      setOpen(false);
    }
  };

  const closeDialog = () => {
    setInviteData(initialInviteData);
    setOpen(false);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setInviteData({ ...inviteData, [name]: value });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='fixed z-10 inset-0 overflow-y-auto' initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
            &#8203;
          </span> */}
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div>
              {type === 'user-invite' && (
                <form
                  onSubmit={onSubmit}
                  className='inline-block bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all mb-8 mt-32 align-middle max-w-lg w-full p-6'
                >
                  <div className={`w-full`}>
                    <div className='mt-3 text-center sm:mt-5 w-full'>
                      <Dialog.Title as='h3' className='text-lg leading-6 font-medium text-gray-900'>
                        <Heading className={`text-brand_blue`} title={title} size={2} />
                      </Dialog.Title>
                      <div style={{ minWidth: '300px' }} className='mt-6 space-y-4'>
                        <InputBox
                          placeholder={`Full Name`}
                          name={`name`}
                          value={inviteData.name}
                          onValueChange={handleInputChange}
                          variant={3}
                          required={true}
                        />
                        <InputBox
                          placeholder={`Company Email`}
                          name={`email`}
                          type={'email'}
                          value={inviteData.email}
                          onValueChange={handleInputChange}
                          variant={3}
                          required={true}
                        />
                        <InputBox
                          placeholder={`Company Role`}
                          value={inviteData.role}
                          onValueChange={handleInputChange}
                          name={`role`}
                          variant={3}
                          required={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mt-5 sm:mt-6 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense w-full'>
                    <Button className={`h-14 w-full`} onClick={closeDialog} ref={cancelButtonRef} text={`Cancel`} type={`secondary`} cx={2} />
                    <Button type={`submit`} className={`h-14 w-full`} text={`Invite`} cx={2} />
                  </div>
                </form>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AppDialog;
