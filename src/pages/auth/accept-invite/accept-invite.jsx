import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useDispatch, useSelector } from 'react-redux';

import InputBox from '../../../components/fragments/input-box';
import Button from '../../../components/fragments/button';

import { UserActions } from '../../../states/actions';

const AcceptInvite = () => {
  const { token } = useParams();
  const history = useHistory();
  const response = useSelector(state => state.response);
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState({ name: '', newPassword: '', confirmPassword: '' });

  useEffect(() => {
    if (token) {
      dispatch(UserActions.updateUser({ token }));
    }
    // eslint-disable-next-line
  }, [token]);

  useEffect(() => {
    if (response.type === 'success') {
      history.push('/auth/signin');
    }
    // eslint-disable-next-line
  }, [response]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(UserActions.acceptInvite(userDetail)).catch(console.log);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className={`text-lg text-brand_blue font-medium mb-6 sm:-mt-4`}>Update Profile</h1>
      <FadeIn className={`space-y-8`}>
        <InputBox type={`text`} placeholder={`Full Name`} name={`name`} onValueChange={handleInputChange} required={true} variant={5} />
        <InputBox
          type={`password`}
          placeholder={`New Password`}
          name={`newPassword`}
          autoComplete={'new-password'}
          onValueChange={handleInputChange}
          required={true}
          variant={5}
        />
        <InputBox
          type={`password`}
          placeholder={`Confirm Password`}
          name={`confirmPassword`}
          autoComplete={'confirm-password'}
          onValueChange={handleInputChange}
          required={true}
          variant={5}
        />
        <Button text={`Accept Invitation`} className={`w-full`} />
      </FadeIn>
    </form>
  );
};

export default AcceptInvite;
