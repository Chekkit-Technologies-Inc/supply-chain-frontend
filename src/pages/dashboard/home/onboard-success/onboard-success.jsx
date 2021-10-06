import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as Success } from '../../../../assets/check.svg';
import Button from '../../../../components/fragments/button';
import Heading from '../../../../components/fragments/heading';
import Text from '../../../../components/fragments/text';

const OnboardSuccess = () => {
  const history = useHistory();
  return (
    <div className={`p-6 pb-16 pt-12 w-full min-h-screen flex flex-col justify-center items-center space-y-12`}>
      <div className={`w-96 h-96`}>
        <Success className={`w-full h-full`} />
      </div>
      <div className={`space-y-2`}>
        <Heading className={`font-semibold text-center mt-6`} title={`Asset Onboarded Successfully`} />
        <Text className={`text-center text-brand_blue`} value={`Awesome. You have successfully onboarded the asset`} />
      </div>
      <Button text={`Continue To Your Dashboard`} onClick={() => history.push('/dashboard')} />
    </div>
  );
};

export default OnboardSuccess;
