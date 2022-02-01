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
  const [userDetail, setUserDetail] = useState({ name: '', password: '', confirmPassword: '' });

  useEffect(() => {
    dispatch(UserActions.signOut());
    localStorage.removeItem('chekkit-act');
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(UserActions.updateUser({ verifyToken: token }));
    }
    // eslint-disable-next-line
  }, [token]);

  useEffect(() => {
    if (userDetail.name && response.type === 'success') {
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
    <form className={`max-w-md w-full`} onSubmit={handleSubmit}>
      <h1 lassName='font-semibold text-white text-xl mb-8 text-center'>Update Profile</h1>
      <FadeIn className={`space-y-8`}>
        <InputBox type={`text`} placeholder={`Full Name`} name={`name`} onValueChange={handleInputChange} required={true} />
        <InputBox
          type={`password`}
          placeholder={`New Password`}
          name={`password`}
          autoComplete={'new-password'}
          onValueChange={handleInputChange}
          required={true}
        />
        <InputBox
          type={`password`}
          placeholder={`Confirm Password`}
          name={`confirmPassword`}
          autoComplete={'confirm-password'}
          onValueChange={handleInputChange}
          required={true}
        />
        <Button text={`Accept Invitation`} className={`w-full`} variant={1} />
      </FadeIn>
    </form>
  );
};

export default AcceptInvite;
