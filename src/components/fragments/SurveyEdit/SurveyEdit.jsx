import React, { useState } from 'react';
import { MdContentCopy, MdDelete } from 'react-icons/md';

import Button from '../Button';

import QuestionList from '../QuestionList';

const SurveyEdit = ({ data, goBack, onDone }) => {
  const [questionData, setQuestionData] = useState([]);

  // useEffect(() => {
  //   if (data && data.length > 0) {
  //     setQuestionData(data);
  //   } // eslint-disable-next-line
  // }, [data]);

  return (
    <div className='w-full py-12 md:py-32 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-start bg-dots'>
      <div className={`flex flex-col justify-center items-center bg-gray-100 rounded-xl p-4 w-full max-w-3xl divide-y divide-gray-300 space-y-6`}>
        <QuestionList data={questionData} update={setQuestionData} />
        <div className={`w-full flex justify-between items-end pt-6`}>
          <Button text={`Back`} type={`secondary`} size={2} onClick={goBack} />
          <div className={`flex items-end lg:items-center flex-col space-y-6 lg:flex-row lg:space-y-0  lg:space-x-6`}>
            <div className={`flex items-center space-x-6`}>
              <MdContentCopy className={`text-gray-600 cursor-pointer`} size={20} />
              <MdDelete className={`text-gray-600 cursor-pointer`} size={20} />
            </div>
            <Button text={`Done`} size={2} onClick={() => onDone(questionData)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyEdit;
