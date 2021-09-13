import React from 'react';
import { useHistory } from 'react-router-dom';

import InputBox from '../InputBox';
import Button from '../Button';

const Login = () => {
  const history = useHistory();
  return (
    <div className={`space-y-8`}>
      <InputBox type={`email`} placeholder={`Email Address`} />
      <InputBox type={`password`} placeholder={`Password`} />
      <Button text={`Log In`} className={`w-full`} variant={1} onClick={() => history.push('/setup')} />
    </div>
  );
};

export default Login;
