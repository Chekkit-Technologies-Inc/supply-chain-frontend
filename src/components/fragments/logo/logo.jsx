import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as LogoImage } from '../../../assets/logo.svg';

const Logo = ({ size }) => {
  const history = useHistory();
  return <LogoImage onClick={() => history.push('/')} width={size} className={`cursor-pointer`} />;
};

export default Logo;
