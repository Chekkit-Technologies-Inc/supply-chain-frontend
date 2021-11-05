import React from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';

import { ReactComponent as Success } from '../../../../assets/check.svg';
import Button from '../../../../components/fragments/button';
import Heading from '../../../../components/fragments/heading';
import Text from '../../../../components/fragments/text';

const OnboardSuccess = () => {
  const history = useHistory();
  return (
    <FadeIn className={`p-6 pb-16 pt-12 w-full min-h-screen flex flex-col justify-center items-center space-y-12`}>
      <div className={`w-80 h-80`}>
        <Success className={`w-80`} />
      </div>
      <div className={`space-y-2`}>
        <Heading className={`font-semibold text-center mt-6`} title={`Asset Onboarded Successfully!`} />
        <Text className={`text-center text-brand_blue`} value={`Awesome. You have successfully onboarded the asset`} />
      </div>
      <Button text={`Go To Dashboard`} onClick={() => history.push('/onboarding/post-onboard')} />
    </FadeIn>
  );
};

export default OnboardSuccess;
