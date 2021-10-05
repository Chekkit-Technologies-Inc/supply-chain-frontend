import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import survey from '../../../../assets/survey.svg';

import Heading from '../../../../components/fragments/Heading';
import Text from '../../../../components/fragments/Text';
import Button from '../../../../components/fragments/Button';
import SurveyEdit from '../../../../components/fragments/SurveyEdit';
import SurveyPreview from '../../../../components/fragments/SurveyPreview';

const CreateSurvey = () => {
  const history = useHistory();
  const [showFlow, setShowFlow] = useState(0);
  const [data, setData] = useState([]);
  return (
    <>
      {!showFlow && (
        <div className='w-full h-full py-12 px-4 sm:px-6 md:px-8'>
          <div className={`w-full h-full flex justify-center items-center max-w-5xl mx-auto xl:space-x-16`}>
            <div className={`flex-1 flex flex-col justify-center items-start space-y-6`}>
              <div>
                <Heading className={`font-medium inline`} title={`Step 1 of sticker setup: `} />
                <Heading className={`font-bold text-green-400 inline`} title={`Create Survey`} />
              </div>
              <Text value={`Create survey to attach on asset which wil be embedded in the data matrix code.`} />
              <div className={`flex space-x-4 md:space-x-8 justify-center`}>
                <Button text={`Back`} type={`secondary`} onClick={() => history.goBack()} />
                <Button text={`Get Started`} onClick={() => setShowFlow(1)} />
              </div>
            </div>
            <div className={`hidden flex-1 xl:flex flex-col justify-center items-center p-6`}>
              <img className={`w-full max-w-sm`} src={survey} alt='survey' />
            </div>
          </div>
        </div>
      )}

      {showFlow === 1 && (
        <SurveyEdit
          data={data}
          goBack={() => setShowFlow(0)}
          onDone={data => {
            setShowFlow(2);
            setData(data);
          }}
        />
      )}

      {showFlow === 2 && (
        <SurveyPreview
          data={data}
          goBack={data => {
            setShowFlow(1);
            setData(data);
          }}
        />
      )}
    </>
  );
};

export default CreateSurvey;
