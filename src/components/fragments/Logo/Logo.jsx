import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

const Logo = ({ size }) => {
  const history = useHistory();
  return <img onClick={() => history.push('/')} width={size} className={`cursor-pointer`} src={logo} alt='logo' />;
};

export default Logo;
