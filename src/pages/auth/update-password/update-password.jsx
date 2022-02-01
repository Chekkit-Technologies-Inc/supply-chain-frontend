import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useDispatch } from 'react-redux';

import InputBox from '../../../components/fragments/input-box';
import Button from '../../../components/fragments/button';

import { UserActions } from '../../../states/actions';

const UpdatePassword = () => {
  const { token } = useParams();
  const history = useHistory();
  // const response = useSelector(state => state.response);
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState({ newPassword: '', confirmPassword: '' });

  useEffect(() => {
    localStorage.removeItem('chekkit-act');
    if (token) {
      dispatch(UserActions.updateUser({ verifyToken: token }));
    }
    // eslint-disable-next-line
  }, [token]);

  // useEffect(() => {
  //   if (response.type === 'success') {
  //     history.push('/auth/signin');
  //   }
  //   // eslint-disable-next-line
  // }, [response]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(UserActions.updatePassword(userDetail))
      .then(res => {
        dispatch(UserActions.signOut());
        setTimeout(() => {
          history.push('/auth/signin');
        }, 1000);
      })
      .catch(console.log);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  return (
    <form className={`max-w-md w-full`}  onSubmit={handleSubmit}>
      <h1 className='font-semibold text-white text-xl mb-8 text-center'>Update Password</h1>
      <FadeIn className={`space-y-8`}>
        <InputBox
          type={`password`}
          placeholder={`New Password`}
          name={`newPassword`}
          autoComplete={'new-password'}
          onValueChange={handleInputChange}
          required={true}
        />
        <InputBox
          type={`password`}
          placeholder={`Confirm Password`}
          name={`confirmPassword`}
          autoComplete={'new-password'}
          onValueChange={handleInputChange}
          required={true}
        />
        <Button text={`Update Password`} className={`w-full`} variant={1} />
      </FadeIn>
    </form>
  );
};

export default UpdatePassword;
