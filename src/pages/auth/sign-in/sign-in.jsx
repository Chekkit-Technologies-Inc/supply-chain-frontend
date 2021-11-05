import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useDispatch, useSelector } from 'react-redux';

import InputBox from '../../../components/fragments/input-box';
import Button from '../../../components/fragments/button';
import Text from '../../../components/fragments/text';

import { User } from '../../../models';
import { UserActions } from '../../../states/actions';

const SignIn = () => {
  const user = useSelector(state => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState(new User());

  useEffect(() => {
    if (user.isAuthorized) {
      localStorage.setItem('chekkit-act', user.token);
      history.push('/setup/pick-management');
    }
    // eslint-disable-next-line
  }, [user]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(UserActions.signIn(userDetail)).catch(console.log);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FadeIn className={`space-y-8`}>
        <InputBox type={`email`} placeholder={`Email Address`} name={`email`} onValueChange={handleInputChange} required={true} />
        <InputBox
          type={`password`}
          placeholder={`Password`}
          name={`password`}
          autoComplete={'current-password'}
          onValueChange={handleInputChange}
          required={true}
        />
        <div className={`text-right -mt-4`}>
          <Text onClick={() => history.push('/forgot-password')} className={`cursor-pointer hover:text-green-300 inline-block`} value={`Forgot password`} />
        </div>
        <Button text={`Sign In`} className={`w-full`} variant={1} />
      </FadeIn>
    </form>
  );
};

export default SignIn;
