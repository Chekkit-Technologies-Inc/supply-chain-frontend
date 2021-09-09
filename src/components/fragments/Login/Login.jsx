import React from 'react';

import InputBox from '../InputBox';
import Button from '../Button';

const Login = () => {
  return (
    <div className={`space-y-8`}>
      <InputBox
        type={`email`}
        placeholder={`Email Address`}
        className={`w-full p-5 rounded-t-lg border-b-2 border-brand_blue_light bg-white bg-opacity-10 focus:outline-none`}
      />
      <InputBox
        type={`password`}
        placeholder={`Password`}
        className={`w-full p-5 rounded-t-lg border-b-2 border-brand_blue_light bg-white bg-opacity-10 focus:outline-none`}
      />
      <Button text={`Log In`} className={`w-full`} variant={1} />
    </div>
  );
};

export default Login;
