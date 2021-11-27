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
      history.push('/setup/pick-management');
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
    <form onSubmit={handleSubmit}>
      <h1 className={`text-lg text-brand_blue font-medium mb-6 sm:-mt-4`}>Reset Password</h1>
      <FadeIn className={`space-y-8`}>
        <InputBox type={`email`} placeholder={`Email Address`} name={`email`} onValueChange={handleInputChange} required={true} variant={5} />
        <Button text={`Reset Password`} className={`w-full`} />
      </FadeIn>
    </form>
  );
};

export default ResetPassword;
