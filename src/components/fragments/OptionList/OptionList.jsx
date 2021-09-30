import React from 'react';
import { ReactComponent as DragIcon } from '../../../assets/drag-item.svg';
import { ReactComponent as Checked } from '../../../assets/radio-checked.svg';
import { ReactComponent as Unchecked } from '../../../assets/radio-unchecked.svg';

import InputBox from '../InputBox/InputBox';

const OptionList = () => {
  return (
    <div className={`w-full max-w-md flex flex-col items-center space-y-6`}>
      <div className={`w-full text-gray-500`}>options</div>
      <ul className={`w-full space-y-6`}>
        <li className={`flex items-center space-x-4`}>
          <DragIcon className={`cursor-move`} />
          <div className={`cursor-pointer`}>{'allSelected' ? <Checked /> : <Unchecked />}</div>
          <InputBox placeholder={`Type answer here...`} variant={3} />
        </li>
        <li className={`flex items-center space-x-4`}>
          <DragIcon className={`cursor-move`} />
          <div className={`cursor-pointer`}>{'' ? <Checked /> : <Unchecked />}</div>
          <InputBox placeholder={`Type answer here...`} variant={3} />
        </li>
      </ul>
      <div className={`flex items-center justify-end w-full`}>
        <div className={`text-brand_blue font-medium text-sm bg-blue-200 rounded-md p-2 cursor-pointer`}>+ Add Option</div>
      </div>
    </div>
  );
};

export default OptionList;
