import React, { useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../../../../components/fragments/button';
import InputBox from '../../../../components/fragments/input-box';

const initialData = {
  full_name: '',
  email: '',
  phone_number: '',
  message: '',
  title: '',
};

const HelpBase = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState(initialData);

  const handleInput = e => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // const handlePhoneChange = phone_number => {
  //   if (phone_number) {
  //     setData({ ...data, phone_number: phone_number });
  //   }
  // };

  const sendMessage = e => {
    e.preventDefault();
    console.log(dispatch);
    // dispatch(MarketingActions.sendRequest(data))
    //   .then(res => {
    //     if (res?.ok) {
    //       setData(initialData);
    //     }
    //   })
    //   .catch(console.log);
  };

  return (
    <FadeIn className='bg p-4 md:px-12 py-16 min-h-screen w-full'>
      <div className='text-sm text-brand_blue mb-6 -mt-6'>
        <span onClick={() => history.push('/home')} className='text-brand_blue_light cursor-pointer'>
          Main menu{' '}
        </span>
        <span className='text-brand_blue_light'>| </span>
        <span onClick={() => history.push('/settings')} className='text-brand_blue_light cursor-pointer'>
          Settings
        </span>
        <span className='text-brand_blue_light'> | </span>
        <span onClick={() => history.push('/settings/contact-chekkit')} className='text-blue-500 cursor-pointer'>
          Contact Chekkit
        </span>
      </div>
      <div className='text-2xl text-brand_blue mb-12'>Contact Chekkit</div>
      <FadeIn className='flex-1 w-full space-y-6 max-w-4xl mx-auto'>
        <div className='font-extrabold text-2xl text-brand_blue'>Send a message</div>
        <form onSubmit={sendMessage} className='space-y-6'>
          <InputBox
            id='landing'
            name={'full_name'}
            placeholder={'Full Name'}
            required={true}
            value={data.full_name}
            onValueChange={handleInput}
            variant={2}
            landing={true}
          />
          <InputBox
            id='landing'
            name={'email'}
            type='email'
            placeholder={'Email'}
            required={true}
            value={data.email}
            onValueChange={handleInput}
            variant={2}
            landing={true}
          />
          <InputBox
            id='landing'
            name={'phone_number'}
            placeholder={'Phone Number'}
            value={data.phone_number}
            onValueChange={handleInput}
            variant={2}
            landing={true}
          />
          <textarea
            style={{ borderColor: '#D7EEFF' }}
            className={`p-4 rounded-t-lg border-b-2 bg-gray-400 bg-opacity-10 text-gray-700 flex items-center space-x-4 overflow-hidden w-full resize-none outline-none focus:outline-none`}
            spellCheck={false}
            value={data.message}
            onChange={handleInput}
            name='message'
            placeholder='Message'
            id='message'
            cols='30'
            rows='6'
            required
          ></textarea>
          <Button className={!data.full_name ? 'pointer-events-none opacity-80' : ''} text={'Send message'} type='submit' variant={'landing'} />
        </form>
      </FadeIn>
    </FadeIn>
  );
};

export default HelpBase;
