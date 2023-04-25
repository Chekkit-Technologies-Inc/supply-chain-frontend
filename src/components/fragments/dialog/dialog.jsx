import React, { Fragment, useState, useRef, forwardRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import { format } from 'date-fns';

import Button from '../button';
import InputBox from '../input-box';
import Heading from '../heading';
import { ReactComponent as LogoSVG } from '../../../assets/logo.svg';

import { ResponseActions } from '../../../states/actions';

const initialInviteData = { email: '', companyRole: '' };

const AppDialog = ({ open, setOpen, type, title, action, data }) => {
  const componentRef = useRef();
  const dispatch = useDispatch();

  const [inviteData, setInviteData] = useState(initialInviteData);

  const onSubmit = e => {
    e.preventDefault();
    if (action) {
      if (type === 'user-invite') {
        let send = inviteData.email && inviteData.companyRole;
        if (send) {
          action(inviteData);
          setInviteData(initialInviteData);
          setOpen(false);
        } else {
          dispatch(ResponseActions.notify({ title: 'Error', message: 'Incomplete data', type: 'danger' }));
        }
      }
      if (type === 'agent-invite') {
        let send = inviteData.name && inviteData.password && inviteData.email;
        if (send) {
          action(inviteData);
          setInviteData(initialInviteData);
          setOpen(false);
        } else {
          dispatch(ResponseActions.notify({ title: 'Error', message: 'Incomplete data', type: 'danger' }));
        }
      }
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

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='fixed z-10 inset-0 overflow-y-auto' onClose={setOpen}>
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
                  className='inline-block bg-white text-left overflow-hidden shadow-xl transform transition-all mb-8 mt-32 align-middle max-w-lg w-full p-6'
                >
                  <div className={`w-full`}>
                    <div className='mt-3 text-center sm:mt-5 w-full'>
                      <Dialog.Title as='h3' className='text-lg leading-6 font-medium text-gray-900'>
                        <Heading className={`text-brand_blue`} title={title} size={2} />
                      </Dialog.Title>
                      <div style={{ minWidth: '300px' }} className='mt-6 space-y-4'>
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
                          type={'text'}
                          onValueChange={handleInputChange}
                          value={inviteData.companyRole}
                          name={`companyRole`}
                          variant={3}
                          required={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mt-5 sm:mt-6 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense w-full'>
                    <Button className={`h-14 w-full`} onClick={closeDialog} text={`Cancel`} type={`secondary`} cx={2} />
                    <Button type={`submit`} className={`h-14 w-full`} text={`Invite`} cx={2} />
                  </div>
                </form>
              )}
              {type === 'agent-invite' && (
                <form
                  onSubmit={onSubmit}
                  className='inline-block bg-white text-left overflow-hidden shadow-xl transform transition-all mb-8 mt-32 align-middle max-w-lg w-full p-6'
                >
                  <div className={`w-full`}>
                    <div className='mt-3 text-center sm:mt-5 w-full'>
                      <Dialog.Title as='h3' className='text-lg leading-6 font-medium text-gray-900'>
                        <Heading className={`text-brand_blue`} title={title} size={2} />
                      </Dialog.Title>
                      <div style={{ minWidth: '300px' }} className='mt-6 space-y-4'>
                      <InputBox
                          placeholder={`Name`}
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
                          placeholder={`Password`}
                          name={`password`}
                          type={'password'}
                          value={inviteData.password}
                          onValueChange={handleInputChange}
                          variant={3}
                          required={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mt-5 sm:mt-6 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense w-full'>
                    <Button className={`h-14 w-full`} onClick={closeDialog} text={`Cancel`} type={`secondary`} cx={2} />
                    <Button type={`submit`} className={`h-14 w-full`} text={`Add Agent`} cx={2} />
                  </div>
                </form>
              )}
              {type === 'invoice' && (
                <div className='bg-white pb-12 inline-block overflow-auto shadow-xl transform transition-all mb-8 mt-20 align-middle w-full max-w-3xl space-y-6'>
                  {/*  */}

                  <Invoice ref={componentRef} data={data} />

                  {/*  */}
                  <Button onClick={handlePrint} className={`mx-auto`} text={`Print Now`} />
                </div>
              )}
              {type === 'product-request' && (
                <div className='inline-block bg-white p-6 overflow-hidden shadow-xl transform transition-all mb-8 mt-32 text-center align-middle max-w-lg w-full'>
                  <div className={`w-full my-12 flex justify-center text-gray-500`}>Kindly wait as this product will be available soon</div>
                  <div className='mt-5 sm:mt-6 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-1 sm:grid-flow-row-dense w-full'>
                    <Button className={`h-14 w-full`} onClick={closeDialog} text={`Close`} type={`secondary`} cx={2} />
                  </div>
                </div>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const Invoice = forwardRef(({ data }, ref) => {
  const user = useSelector(state => state.user);

  return (
    <div ref={ref} className='bg-white p-12 space-y-12 overflow-auto'>
      {/*  */}

      <div className='flex justify-between w-full space-x-4 text-sm'>
        <div className='space-y-2 text-left'>
          <div className='uppercase text-blue-600 font-semibold'>Invoice - {data.type}</div>
          <div className=' text-blue-600'>#258942</div>
        </div>
        <div className='space-y-2 text-right'>
          <div className=''>
            <span className='text-gray-400'>Date: </span>
            <span className='text-gray-400 font-bold'>{format(new Date(), 'dd.MM.yyyy')}</span>
          </div>
          <div className=''>
            <span className='text-gray-400'>Due Date: </span>
            <span className='text-gray-400 font-bold'>
              {format(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 7), 'dd.MM.yyyy')}
            </span>
          </div>
        </div>
      </div>

      {/*  */}

      <div className='flex justify-between w-full space-x-4 text-sm'>
        <div className='space-y-2 text-left'>
          <div className='uppercase text-gray-400 text-base'>BILL FROM:</div>
          <div className='w-40'>
            <LogoSVG className='w-full' />
          </div>
          <div style={{ maxWidth: '180px' }} className=' text-gray-400 capitalize'>
            9b Onikoyi Lane Parkview Estate, Ikoyi 101223, Lagos.
          </div>
        </div>

        <div className='space-y-4 text-left'>
          <div className='uppercase text-gray-400 text-base'>BILL TO:</div>
          <div className=' text-gray-800 text-2xl capitalize font-medium'>{user?.company?.name}</div>
          <div style={{ maxWidth: '180px' }} className=' text-gray-400 capitalize'>
            {user?.company?.address}, {user?.company?.country}
          </div>
        </div>
      </div>

      {/*  */}

      <div className='space-y-4'>
        <div className='flex text-blue-600 font-medium text-left text-sm'>
          <div className='flex-1'>ITEM</div>
          <div className='w-32'>UNIT COST</div>
          <div className='w-20'>UNIT</div>
          <div className='w-20'>TOTAL</div>
        </div>
        {data.details.map(d => {
          return (
            <div className='flex text-gray-800 font-medium text-left text-sm'>
              <div className='flex-1'>{d.name}</div>
              <div className='w-32'>{`N ${d.unitCost}`}</div>
              <div className='w-20'>{d.unit}</div>
              <div className='w-20'>{`N ${d.unitCost * d.unit}`}</div>
            </div>
          );
        })}
        <div style={{ height: '.4px' }} className='bg-gray-100'></div>
        <div className='flex justify-between space-x-4 capitalize text-blue-600'>
          <div>{data.type} Total</div>
          <div className='font-semibold'>
            {data.type.toLowerCase() === 'basic plan'
              ? 'N 1,500,000'
              : data.type.toLowerCase() === 'premium plan'
              ? 'N 5,000,000'
              : data.type.toLowerCase() === 'entreprise plan'
              ? 'N 15,000,000'
              : 'N 0'}
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
});

export default AppDialog;
