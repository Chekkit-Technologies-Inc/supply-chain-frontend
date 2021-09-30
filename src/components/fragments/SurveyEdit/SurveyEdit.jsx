import React from 'react';
import { useHistory } from 'react-router-dom';
import { MdContentCopy, MdDelete } from 'react-icons/md';
import { ReactComponent as DragIcon } from '../../../assets/drag-item.svg';

import Button from '../Button';

const SurveyEdit = ({ data, fresh, goBack }) => {
  const history = useHistory();
  return (
    <div className='w-full h-full py-12 md:py-32 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-start bg-dots'>
      <div className={`flex flex-col justify-center items-center bg-gray-100 rounded-xl p-4 w-full max-w-3xl divide-y divide-gray-300 space-y-6`}>
        <div className={`w-full flex flex-col justify-center items-center `}>
          <DragIcon className={`transform rotate-90`} />
        </div>
        <div className={`w-full flex justify-between items-end pt-6`}>
          <Button text={`Back`} type={`secondary`} size={2} onClick={goBack} />
          <div className={`flex items-end lg:items-center flex-col space-y-6 lg:flex-row lg:space-y-0  lg:space-x-6`}>
            <div className={`flex items-center space-x-6`}>
              <MdContentCopy className={`text-gray-600 cursor-pointer`} size={20} />
              <MdDelete className={`text-gray-600 cursor-pointer`} size={20} />
            </div>
            <Button text={`Done`} size={2} onClick={() => history.push('/dashboard/survey-preview')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyEdit;
