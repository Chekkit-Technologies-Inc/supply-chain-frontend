import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FadeIn from 'react-fade-in';

import Logo from '../../components/fragments/logo';
import { ReactComponent as SignoutIcon } from '../../assets/signout.svg';
import PlanList from '../../components/fragments/plan-list';
import Dialog from '../../components/fragments/dialog';

import { UserActions } from '../../states/actions';

const plans = [
  {
    name: 'Basic Plan',
    sub: '20 tags & 1 gateway reader',
    price: 'N1.5m',
    features: [
      { title: 'Enjoy all Supply Chain products', included: true },
      { title: 'Payments Can Be Made Quaterly', included: true },
      { title: 'Generate Reports', included: false },
      { title: 'Attachment of tags and readers', included: false },
    ],
    details: [
      { name: 'RFID Tags', unit: 20, unitCost: 350 },
      { name: 'Gateway Reader', unit: 1, unitCost: 350 },
    ],
  },
  {
    name: 'Premium Plan',
    sub: '100 tags & 1 gateway reader',
    price: 'N5m',
    features: [
      { title: 'Enjoy all Supply Chain products', included: true },
      { title: 'Payments Can Be Made Quaterly', included: true },
      { title: 'Generate Reports', included: true },
      { title: 'Attachment of tags and readers', included: false },
    ],
    details: [
      { name: 'RFID Tags', unit: 100, unitCost: 350 },
      { name: 'Gateway Reader', unit: 1, unitCost: 350 },
    ],
  },
  {
    name: 'Enterprise Plan',
    sub: '300 tags & 4 gateway reader',
    price: 'N15m',
    features: [
      { title: 'Enjoy all Supply Chain products', included: true },
      { title: 'Payments Can Be Made Quaterly', included: true },
      { title: 'Generate Reports', included: true },
      { title: 'Attachment of tags and readers', included: true },
    ],
    details: [
      { name: 'RFID Tags', unit: 300, unitCost: 350 },
      { name: 'Gateway Reader', unit: 4, unitCost: 350 },
    ],
  },
];

const Plans = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [plan, setPlan] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (plan) {
      console.log('selected plan', plan);
      subscribe();
      toggleDialog(true);
    }
    // eslint-disable-next-line
  }, [plan]);

  const subscribe = () => {
    dispatch(UserActions.updateUser({ planActive: true }));
  };

  const signout = () => {
    dispatch(UserActions.signOut());
    localStorage.removeItem('chekkit-act');
    history.push('/auth/signin');
  };

  const toggleDialog = status => {
    if (!status) setPlan(null);
    setOpen(status);
  };

  return (
    <div className='min-h-screen bg-blue-50 bg-plans flex flex-col'>
      <div className={`flex items-center justify-center lg:justify-start px-4 md:px-12 py-6`}>
        <Logo size={180} />
      </div>
      <div className='font-semibold text-2xl text-brand_blue text-center px-4 mt-4'>Kindly select a subscription Plan</div>
      <FadeIn className={`flex-1 flex flex-col justify-between items-center space-y-8 py-12 px-4 md:px-12`}>
        <div>{plans && plans.length > 0 && <PlanList items={plans} onComplete={plan => setPlan(plan)} />}</div>
        <div className='flex flex-col items-center space-y-2 text-blue-200'>
          <div onClick={signout} className='border border-blue-100 rounded-full w-10 h-10 cursor-pointer shadow hover:shadow-sm'>
            <SignoutIcon className='w-full h-full' />
          </div>
          <div className='animate-pulse text-sm'>exit</div>
        </div>
      </FadeIn>
      {plan && <Dialog open={open} setOpen={toggleDialog} type={`invoice`} data={plan} />}
    </div>
  );
};

export default Plans;
