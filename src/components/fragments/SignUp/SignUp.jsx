import React from 'react';

import InputBox from '../InputBox';
import Button from '../Button';

const SignUp = () => {
  return (
    <div>
      <InputBox />
      <InputBox />
      <Button text={`Sign Up`} className={`w-full`} variant={1} />
    </div>
  );
};

export default SignUp;
