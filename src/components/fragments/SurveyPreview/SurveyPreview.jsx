import React from 'react';
import { useHistory } from 'react-router-dom';

import Heading from '../Heading';
import Button from '../Button';

const SurveyPreview = ({ data, goBack }) => {
  const history = useHistory();
  return (
    <div className={` px-4 sm:px-6 bg-white h-full`}>
      <div className={`py-8 sm:py-8 bg-white space-y-6 w-full`}>
        <div className={`flex flex-col sm:flex-row space-y-4 sm:space-x-4 justify-between items-center`}>
          <Heading className={`text-brand_blue font-semibold`} title={`Survey Preview`} size={2} />
          <div className={`flex flex-col lg:flex-row items-center justify-center space-x-4`}>
            <span className={`text-brand_blue_light p-2`}>You added 3 questions</span>
            <span className={`text-brand_blue bg-blue-200 px-4 py-2 rounded-lg cursor-pointer`}>Edit survey</span>
          </div>
        </div>
        {JSON.stringify(data)}
        {/* <Item /> */}
        <div className={`flex space-x-4 md:space-x-12 justify-center`}>
          <Button text={`Back`} type={`secondary`} onClick={goBack} />
          <Button text={`Attach Survey`} onClick={() => history.push('/dashboard/embed-info')} />
        </div>
      </div>
    </div>
  );
};

// const Item = () => {
//   return (
//     <li className={`bg-gray-100`}>
//       Hello
//     </li>
//   )
// }

export default SurveyPreview;
