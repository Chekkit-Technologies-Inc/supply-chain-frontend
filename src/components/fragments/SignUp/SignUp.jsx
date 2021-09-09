import React from 'react';

import InputBox from '../InputBox';
import Button from '../Button';

const SignUp = () => {
  return (
    <div className={`space-y-8`}>
      <InputBox className={`w-full p-5 rounded-t-lg border-b-2 border-brand_blue_light bg-white bg-opacity-10 focus:outline-none`} />
      <InputBox className={`w-full p-5 rounded-t-lg border-b-2 border-brand_blue_light bg-white bg-opacity-10 focus:outline-none`} />
      <Button text={`Sign Up`} className={`w-full`} variant={1} />
    </div>
  );
};

export default SignUp;
