import React from 'react';

import { ReactComponent as DragIcon } from '../../../assets/drag-item.svg';

import InputBox from '../InputBox/InputBox';
import SelectBox from '../SelectBox';
import OptionList from '../OptionList';

const QuestionList = () => {
  return (
    <div className={`w-full flex flex-col justify-center items-center `}>
      <DragIcon className={`transform rotate-90 mb-6 cursor-move`} />
      <InputBox className={`max-w-md mb-12`} label={`Question`} labelColor={`text-gray-500`} placeholder={`Type question here...`} variant={3} />
      <OptionList />
      <SelectBox className={`max-w-md mb-6 mt-10`} placeholder={`Select Asset Batch`} options={['Cat01', 'Cat02']} variant={3} />
      <div className={`w-full max-w-md`}>
        <div className={`inline-flex items-center space-x-2 cursor-pointer`}>
          <span style={{ paddingTop: '2px' }} className={`w-4 h-4 text-white bg-brand_blue flex justify-center items-center rounded-full`}>
            +
          </span>
          <span className={`text-brand_blue font-semibold text-sm`}>Add Question</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionList;
