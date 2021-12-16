import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ImageFadeIn from 'react-image-fade-in';

import { CgSpinner } from 'react-icons/cg';

import thumb from '../../../assets/thumb.png';
import emailSent from '../../../assets/email-sent.png';
import close from '../../../assets/close.png';
import Heading from '../../../components/fragments/heading';
import Text from '../../../components/fragments/text';
import Button from '../../../components/fragments/button';

import { UserActions } from '../../../states/actions';

const VerifyAccount = () => {
  const { token } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const response = useSelector(state => state.response);

  useEffect(() => {
    localStorage.removeItem('chekkit-act');
    if (!token && !user?.email) {
      history.push('/auth/signin');
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(UserActions.updateUser({ token }));
    }
    // eslint-disable-next-line
  }, [token]);

  useEffect(() => {
    if (user?.token) {
      dispatch(UserActions.verifyAccount());
    }
    // eslint-disable-next-line
  }, [user?.token]);

  const retry = () => {
    if (user?.token) {
      dispatch(UserActions.verifyAccount());
    }
  };

  const proceed = () => {
    dispatch(UserActions.signOut());
    localStorage.removeItem('chekkit-act');
    history.push('/auth/signin')
  }

  return (
    <div className={`bg min-h-screen`}>
      {response.loading && (
        <div className={`absolute top-0 bottom-0 left-0 right-0 z-20 flex justify-center items-center`}>
          <CgSpinner className={`text-brand_blue animate-spin`} size={64} />
        </div>
      )}
      {user?.acc_verified && !response.loading && (
        <FadeIn className={`p-6 pb-16 pt-12 w-full min-h-screen flex flex-col justify-center items-center space-y-12`}>
          <div className={`w-96 h-96 p-6`}>
            <ImageFadeIn className={`w-96`} src={thumb} alt='' opacityTransition={1} />
          </div>
          <div className={`space-y-2 bg-transparent`}>
            <Heading className={`font-semibold text-center mt-6`} title={`Verification Successful!`} />
            <Text className={`text-center text-brand_blue`} value={`Account has been Verified`} />
          </div>
          <Button text={`Sign In`} onClick={proceed} />
        </FadeIn>
      )}
      {token && !user?.acc_verified && !response.loading && (
        <FadeIn className={`p-6 pb-16 pt-12 w-full min-h-screen flex flex-col justify-center items-center space-y-12`}>
          <div className={`w-96 h-96 p-6`}>
            <ImageFadeIn className={`w-96`} src={close} alt='' opacityTransition={1} />
          </div>
          <div className={`space-y-2 bg-transparent`}>
            <Heading className={`font-semibold text-center mt-6`} title={`Verification Failed!`} />
            <Text className={`text-center text-brand_blue`} value={`Account verification failed`} />
          </div>
          <Button text={`Retry`} onClick={retry} />
        </FadeIn>
      )}
      {user?.email && !user?.acc_verified && !response.loading && (
        <FadeIn className={`p-6 pb-16 pt-12 w-full min-h-screen flex flex-col justify-center items-center space-y-12`}>
          <div className={`w-96 h-96 p-6`}>
            <ImageFadeIn className={`w-96`} src={emailSent} alt='' opacityTransition={1} />
          </div>
          <div className={`space-y-2 bg-transparent`}>
            <Heading className={`font-semibold text-center mt-6`} title={`Verification Email Sent!!`} />
            <div className={`flex items-center`}>
              <Text className={`text-center text-brand_blue`} value={`An email has been sent to your address `} />
              <Text className={`text-center text-green-600 font-semibold px-1`} value={user.email} />
            </div>
          </div>
        </FadeIn>
      )}
    </div>
  );
};

export default VerifyAccount;
