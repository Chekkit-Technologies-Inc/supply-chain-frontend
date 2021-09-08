import React from 'react';

import InputBox from '../InputBox';
import Button from '../Button';

const Login = () => {
  return (
    <div>
      <InputBox />
      <InputBox />
      <Button text={`Log In`} className={`w-full`} variant={1} />
    </div>
  );
};

export default Login;
