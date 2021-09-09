import React from 'react';

import InputBox from '../InputBox';
import Button from '../Button';

const SignUp = () => {
  return (
    <div className={`space-y-8`}>
      <InputBox type={`text`} placeholder={`Full Name`} />
      <InputBox type={`email`} placeholder={`Email Address`} />
      <InputBox type={`tel`} placeholder={`Phone Number`} />
      <InputBox type={`password`} placeholder={`Password`} />
      <InputBox type={`password`} placeholder={`Confirm Password`} />
      <Button text={`Sign Up`} className={`w-full`} variant={1} />
    </div>
  );
};

export default SignUp;
