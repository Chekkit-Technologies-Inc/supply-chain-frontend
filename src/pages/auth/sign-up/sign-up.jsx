import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useDispatch, useSelector } from 'react-redux';

import InputBox from '../../../components/fragments/input-box';
import SelectBox from '../../../components/fragments/select-box';
import Button from '../../../components/fragments/button';
import Text from '../../../components/fragments/text';

// import { User } from '../../../models';
import { UserActions } from '../../../states/actions';

const detail = {
  firstName: '',
  lastName: '',
  email: '',
  companyName: '',
  address: '',
  country: '',
  companyRole: '',
  companyIdentifier: 'manufacturer',
};

const SignUp = () => {
  const user = useSelector(state => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState(detail);

  const handleAddressChange = place => {
    const address = place.formatted_address;
    const placeName = place.name;
    const latitude = place.geometry.location.lat();
    const longitude = place.geometry.location.lng();
    setUserDetail({ ...userDetail, address, latitude, longitude, placeName });
  };

  const onFocusChange = () => {
    setTimeout(() => {
      if (!userDetail.latitude && !userDetail.longitude) {
        setUserDetail({ ...userDetail, address: '', state: '', country: '', latitude: '', longitude: '', placeName: '' });
        return;
      }
    }, 0);
  };

  useEffect(() => {
    if (userDetail.address && userDetail.latitude && userDetail.longitude) {
      let arr = userDetail?.address?.split(',');
      let address = arr.slice(0, arr.length - 1).join('');
      let country = arr[arr.length - 1].replace(' ', '');
      let state = userDetail.placeName;
      setUserDetail({ ...userDetail, address, state, country });
    } // eslint-disable-next-line
  }, [userDetail.latitude, userDetail.longitude]);

  useEffect(() => {
    if (user) {
      setUserDetail(user);
    }
  }, [user]);

  useEffect(() => {
    setUserDetail({ ...userDetail, name: userDetail.firstName + ' ' + userDetail.lastName });
    // eslint-disable-next-line
  }, [userDetail.firstName, userDetail.lastName]);

  useEffect(() => {
    localStorage.removeItem('chekkit-act');
    // if (user?.name && !user?.acc_verified) {
    //   history.push('/auth/verify-account');
    // }
    if (user?.name && user?.acc_verified && user?.isAuthorized) {
      history.push('/home');
    }
    if (user?.name && user?.acc_verified && !user?.isAuthorized) {
      history.push('/auth/signin');
    }
    // eslint-disable-next-line
  }, [user]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(UserActions.signUp(userDetail))
      .then(() => {
        history.push('/auth/verify-account');
      })
      .catch(console.log);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  const handleSelectChange = event => {
    const { value } = event.target;
    setUserDetail({ ...userDetail, companyIdentifier: value });
  };

  return (
    <form className={`max-w-3xl w-full`} onSubmit={handleSubmit}>
      <h1 className='font-semibold text-white text-xl mb-8 text-center'>Sign Up</h1>
      <FadeIn className='space-y-8'>
        <div className='flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8'>
          <InputBox type={`text`} placeholder={`First Name`} name={`firstName`} onValueChange={handleInputChange} required={true} />
          <InputBox type={`text`} placeholder={`Last Name`} name={`lastName`} onValueChange={handleInputChange} required={true} />
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8'>
          <InputBox type={`text`} placeholder={`Role`} name={`companyRole`} onValueChange={handleInputChange} required={true} />
          <InputBox type={`email`} placeholder={`Email Address`} name={`email`} onValueChange={handleInputChange} required={true} />
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8'>
          <InputBox type={`text`} placeholder={`Company Name`} name={`companyName`} onValueChange={handleInputChange} required={true} />
          <SelectBox
            type={`text`}
            placeholder={`Company Type`}
            name={`companyIdentifier`}
            onValueChange={handleSelectChange}
            required={true}
            options={['manufacturer', 'distributor', 'retailer']}
          />
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8'>
          <InputBox
            label={`Address`}
            labelColor={`text-gray-200`}
            placeholder={`Type Here`}
            variant={'places'}
            name={`address`}
            placeType={`address`}
            value={userDetail?.address}
            onValueChange={handleInputChange}
            onPlaceSelected={handleAddressChange}
            onFocusChange={onFocusChange}
            required={true}
          />
          <InputBox
            label={`Country`}
            name={`country`}
            defaultValue={userDetail?.country}
            labelColor={`text-gray-200`}
            placeholder={`Type Here`}
            readOnly={true}
            required={true}
          />
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8'>
          <InputBox
            type={`password`}
            placeholder={`Set Password`}
            name={`password`}
            autoComplete={'new-password'}
            onValueChange={handleInputChange}
            required={true}
          />
          <InputBox
            type={`password`}
            placeholder={`Confirm Password`}
            name={`password`}
            autoComplete={'new-password'}
            onValueChange={handleInputChange}
            required={true}
          />
        </div>

        <Button text={`Sign Up`} className={`w-full max-w-md mx-auto`} variant={1} />
      </FadeIn>
      <div className={`text-center mt-6 sm:-mb-4 w-full flex justify-center`}>
        <Text className={`text-gray-400 inline-block`} value={`Already have an account? `} />
        &nbsp;
        <Text onClick={() => history.push('/auth/signin')} className={`cursor-pointer text-gray-100 hover:text-green-300 inline-block`} value={`Sign In`} />
      </div>
    </form>
  );
};

export default SignUp;
