import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useDispatch, useSelector } from 'react-redux';

import InputBox from '../../../components/fragments/input-box';
import Button from '../../../components/fragments/button';
import Text from '../../../components/fragments/text';

import { UserActions } from '../../../states/actions';

const detail = {
  email: '',
};

const SignIn = () => {
  const user = useSelector(state => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState(detail);

  useEffect(() => {
    if (user?.name && user?.isAuthorized) {
      localStorage.setItem('chekkit-act', user.token);
      history.push('/home');
    } else {
      localStorage.removeItem('chekkit-act');
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
    <form className={`max-w-md w-full`} onSubmit={handleSubmit}>
      <h1 className='font-semibold text-white text-xl mb-8 text-center'>Sign In</h1>
      <FadeIn className={`space-y-8`}>
        <InputBox type={`email`} placeholder={`Email Address`} name={`email`} onValueChange={handleInputChange} required={true} />
        <InputBox
          type={`password`}
          placeholder={`Password`}
          name={`password`}
          autoComplete={'current-password'}
          onValueChange={handleInputChange}
          required={true}
          // variant={5}
        />
        <div className={`text-right -mt-4`}>
          <Text
            onClick={() => history.push('/forgot-password')}
            className={`cursor-pointer text-gray-100 hover:text-green-300 inline-block`}
            value={`Forgot password`}
          />
        </div>
        <Button text={`Sign In`} className={`w-full max-w-md mx-auto`} variant={1} />
      </FadeIn>
      <div className={`text-center mt-6 sm:-mb-4 w-full flex justify-center`}>
        <Text className={`text-gray-400 inline-block`} value={`Don't have an account? `} />
        &nbsp;
        <Text onClick={() => history.push('/pick-modules')} className={`cursor-pointer text-gray-100 hover:text-green-300 inline-block`} value={`Sign Up`} />
      </div>
    </form>
  );
};

export default SignIn;
