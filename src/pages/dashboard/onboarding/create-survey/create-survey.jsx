import React from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';

import { ReactComponent as Survey } from '../../../../assets/survey.svg';

import Heading from '../../../../components/fragments/heading';
import Text from '../../../../components/fragments/text';
import Button from '../../../../components/fragments/button';

const CreateSurvey = () => {
  const history = useHistory();

  return (
    <div className='w-full h-full py-12 px-4 sm:px-6 md:px-8'>
      <FadeIn className={`w-full min-h-full flex justify-center items-center max-w-5xl mx-auto xl:space-x-16`}>
        <div className={`flex-1 flex flex-col justify-center items-start space-y-6`}>
          <div>
            <Heading className={`font-medium inline`} title={`Step 1 of sticker setup: `} />
            <Heading className={`font-bold text-green-400 inline`} title={`Create Survey`} />
          </div>
          <Text value={`Create survey to attach on asset which wil be embedded in the data matrix code.`} />
          <div className={`flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12  justify-center md:justify-start`}>
            <Button text={`Back`} type={`secondary`} onClick={() => history.goBack()} />
            <Button text={`Get Started`} onClick={() => history.push('/onboarding/create-survey/survey-edit')} />
          </div>
        </div>
        <div className={`hidden flex-1 xl:flex flex-col justify-center items-center p-6`}>
          <Survey className={`h-96 w-96`} />
        </div>
      </FadeIn>
    </div>
  );
};

export default CreateSurvey;
