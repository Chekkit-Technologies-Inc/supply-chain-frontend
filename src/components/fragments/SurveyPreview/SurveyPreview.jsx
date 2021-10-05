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
            {data && (
              <span className={`text-brand_blue_light p-2`}>
                You added {data.length} question{data.length > 1 ? `s` : ``}
              </span>
            )}
            <span onClick={() => goBack(data)} className={`text-brand_blue bg-blue-200 px-4 py-2 rounded-lg cursor-pointer`}>
              Edit survey
            </span>
          </div>
        </div>
        <ul className={`space-y-6`}>
          {data &&
            data.map((item, idx) => {
              return <Item key={idx} item={item} />;
            })}
        </ul>
        <div className={`flex space-x-4 md:space-x-12 justify-center`}>
          <Button text={`Back`} type={`secondary`} onClick={() => goBack(data)} />
          <Button text={`Attach Survey`} onClick={() => history.push('/dashboard/embed-info')} />
        </div>
      </div>
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <li className={`bg-gray-100 p-6 rounded-xl space-y-6`}>
      <Heading className={`text-gray-600`} title={item?.question} size={2} />
      <ul className={`grid grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-between w-full`}>
        {item &&
          item.options &&
          item.options.map((ops, idx) => {
            return (
              <li className={`flex items-center space-x-2 text-gray-500`} key={idx}>
                <div className={`p-3 w-24 border border-gray-300 rounded-xl text-right font-bold`}>{idx + 1}</div>
                <div>{ops.value}</div>
              </li>
            );
          })}
      </ul>
    </li>
  );
};

export default SurveyPreview;
