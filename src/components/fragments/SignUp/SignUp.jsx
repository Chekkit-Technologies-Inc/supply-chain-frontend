import React from 'react';
import { useHistory } from 'react-router-dom';

import InputBox from '../InputBox';
import Button from '../Button';

const SignUp = () => {
  const history = useHistory();
  return (
    <div className={`space-y-8`}>
      <InputBox type={`text`} placeholder={`Full Name`} />
      <InputBox type={`email`} placeholder={`Email Address`} />
      <InputBox type={`tel`} placeholder={`Phone Number`} />
      <InputBox type={`password`} placeholder={`Password`} />
      <InputBox type={`password`} placeholder={`Confirm Password`} />
      <Button text={`Sign Up`} className={`w-full`} variant={1} onClick={() => history.push('/setup')} />
    </div>
  );
};

export default SignUp;
