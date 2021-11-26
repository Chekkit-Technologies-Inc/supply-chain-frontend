import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useDispatch, useSelector } from 'react-redux';

import InputBox from '../../../components/fragments/input-box';
import Button from '../../../components/fragments/button';

// import { User } from '../../../models';
import { UserActions } from '../../../states/actions';

const SignUp = () => {
  const user = useSelector(state => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    if (user) {
      setUserDetail(user);
    }
  }, [user]);

  useEffect(() => {
    if (user?.email && !user?.acc_verified) {
      history.push('/auth/verify-account');
    }
    if (user?.email && user?.acc_verified && user?.isAuthorized) {
      history.push('/setup/pick-management');
    }
    if (user?.email && user?.acc_verified && !user?.isAuthorized) {
      history.push('/auth/signin');
    }
    // eslint-disable-next-line
  }, [user]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(UserActions.signUp(userDetail)).catch(console.log);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserDetail({ ...userDetail, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <FadeIn className={`space-y-8`}>
        <InputBox type={`text`} placeholder={`Company Name`} name={`companyName`} onValueChange={handleInputChange} required={true} variant={5} />
        <InputBox type={`text`} placeholder={`Company Address`} name={`address`} onValueChange={handleInputChange} required={true} variant={5} />
        <InputBox type={`text`} placeholder={`Company Country`} name={`country`} onValueChange={handleInputChange} required={true} variant={5} />
        <InputBox
          type={`text`}
          placeholder={`Company Type`}
          name={`companyIdentifier`}
          value={userDetail?.companyIdentfier}
          onValueChange={handleInputChange}
          required={true}
          variant={3}
          readOnly={true}
        />
        <InputBox type={`text`} placeholder={`Attendee Name`} name={`name`} onValueChange={handleInputChange} required={true} variant={5} />
        <InputBox type={`text`} placeholder={`Attendee Role`} name={`companyRole`} onValueChange={handleInputChange} required={true} variant={5} />
        <InputBox type={`email`} placeholder={`Attendee Work Email`} name={`email`} onValueChange={handleInputChange} required={true} variant={5} />
        <InputBox
          type={`password`}
          placeholder={`Password`}
          name={`password`}
          autoComplete={'new-password'}
          onValueChange={handleInputChange}
          required={true}
          variant={5}
        />
        <InputBox
          type={`password`}
          placeholder={`Confirm Password`}
          name={`password`}
          autoComplete={'new-password'}
          onValueChange={handleInputChange}
          required={true}
          variant={5}
        />
        <Button text={`Sign Up`} className={`w-full`} />
      </FadeIn>
    </form>
  );
};

export default SignUp;
