import React from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useSelector } from 'react-redux';

import Heading from '../heading';
import Button from '../button';

const SurveyPreview = () => {
  const history = useHistory();
  const questions = useSelector(state => state.questions);
  return (
    <FadeIn className={` px-4 sm:px-6 bg-white h-full`}>
      <div className={`py-8 sm:py-8 bg-white space-y-6 w-full`}>
        <div className={`flex flex-col sm:flex-row space-y-4 sm:space-x-4 justify-between items-center`}>
          <Heading className={`text-brand_blue font-semibold`} title={`Survey Preview`} size={2} />
          <div className={`flex flex-col lg:flex-row items-center justify-center space-x-4`}>
            {questions && (
              <span className={`text-brand_blue_light p-2`}>
                You added {questions.length} question{questions.length > 1 ? `s` : ``}
              </span>
            )}
            <span onClick={() => history.goBack()} className={`text-brand_blue bg-blue-200 px-4 py-2 rounded-lg cursor-pointer`}>
              Edit survey
            </span>
          </div>
        </div>
        <FadeIn className={`space-y-6`}>
          {questions &&
            questions.map((item, idx) => {
              return <Item key={idx} item={item} />;
            })}
        </FadeIn>
        <div className={`flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12  justify-center`}>
          <Button text={`Back`} type={`secondary`} onClick={() => history.goBack()} />
          <Button text={`Attach Survey`} onClick={() => history.push('/onboarding/embed-info')} />
        </div>
      </div>
    </FadeIn>
  );
};

const Item = ({ item }) => {
  return (
    <div className={`bg-gray-100 p-6 rounded-xl space-y-8`}>
      <Heading className={`text-gray-600`} title={item?.question} size={2} />
      <FadeIn className={`grid grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-between w-full`}>
        {item &&
          item.options &&
          item.options.map((ops, idx) => {
            return (
              <div className={`flex items-center space-x-2 text-gray-500`} key={idx}>
                <div className={`p-3 w-24 border border-gray-300 rounded-xl text-right font-bold`}>{idx + 1}</div>
                <div>{ops.value}</div>
              </div>
            );
          })}
      </FadeIn>
    </div>
  );
};

export default SurveyPreview;
