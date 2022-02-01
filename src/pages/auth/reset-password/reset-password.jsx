import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useDispatch, useSelector } from 'react-redux';

import InputBox from '../../../components/fragments/input-box';
import Button from '../../../components/fragments/button';

import { User } from '../../../models';
import { UserActions } from '../../../states/actions';

const ResetPassword = () => {
  const user = useSelector(state => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState(new User());

  useEffect(() => {
    if (user.isAuthorized) {
      localStorage.setItem('chekkit-act', user.token);
      history.push('/home');
    } else {
      localStorage.removeItem('chekkit-act');
    }
    // eslint-disable-next-line
  }, [user]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(UserActions.resetPassword(userDetail)).catch(console.log);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  return (
    <form className={`max-w-md w-full`} onSubmit={handleSubmit}>
      <h1 className='font-semibold text-white text-xl mb-8 text-center'>Reset Password</h1>
      <FadeIn className={`space-y-8`}>
        <InputBox type={`email`} placeholder={`Email Address`} name={`email`} onValueChange={handleInputChange} required={true} />
        <Button text={`Reset Password`} className={`w-full`} variant={1} />
      </FadeIn>
    </form>
  );
};

export default ResetPassword;
