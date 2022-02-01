import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as LogoImage } from '../../../assets/logo.svg';
import { ReactComponent as LogoImageDark } from '../../../assets/logo-dark.svg';

const Logo = ({ size, dark }) => {
  const history = useHistory();
  return !dark ? <LogoImage onClick={() => history.push('/')} width={size} className={`cursor-pointer`} /> : <LogoImageDark onClick={() => history.push('/')} width={size} className={`cursor-pointer`} />;
};

export default Logo;
