import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as LogoImage } from '../../../assets/logo.svg';
import { ReactComponent as LogoImageDark } from '../../../assets/logo-dark.svg';
import { useSelector } from 'react-redux';

const Logo = ({ size, dark }) => {
  const user = useSelector(state => state.user);
  const history = useHistory();
  return !dark ? (
    <LogoImage
      onClick={() => {
        if (user?.isAuthorized) {
          history.push('/home');
        } else {
          history.push('/');
        }
      }}
      width={size}
      className={`cursor-pointer`}
    />
  ) : (
    <LogoImageDark
      onClick={() => {
        if (user?.isAuthorized) {
          history.push('/home');
        } else {
          history.push('/');
        }
      }}
      width={size}
      className={`cursor-pointer`}
    />
  );
};

export default Logo;
