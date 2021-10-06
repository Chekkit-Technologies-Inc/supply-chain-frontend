import React from 'react';
import { useHistory } from 'react-router-dom';

import InputBox from '../../../components/fragments/input-box';
import Button from '../../../components/fragments/button';

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
