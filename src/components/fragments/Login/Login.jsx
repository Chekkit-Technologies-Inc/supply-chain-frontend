import React from 'react';

import InputBox from '../InputBox';
import Button from '../Button';

const Login = () => {
  return (
    <div className={`space-y-8`}>
      <InputBox type={`email`} placeholder={`Email Address`} />
      <InputBox type={`password`} placeholder={`Password`} />
      <Button text={`Log In`} className={`w-full`} variant={1} />
    </div>
  );
};

export default Login;
