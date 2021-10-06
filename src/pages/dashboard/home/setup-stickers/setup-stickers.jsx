import React from 'react';
import { useHistory } from 'react-router-dom';

import Sticker from '../../../../assets/bcwhite.png';

import Heading from '../../../../components/fragments/heading';
import Text from '../../../../components/fragments/text';
import Button from '../../../../components/fragments/button';

const SetupStickers = () => {
  const history = useHistory();
  return (
    <div className={` px-4 sm:px-6 bg-white h-full w-full`}>
      <div className={`pt-36 pb-16 bg-white space-y-16 w-full`}>
        <div className={`flex justify-center items-center`}>
          <div className={`relative w-72 h-64`}>
            <div className={`w-full h-full bg-green-300 bg-opacity-50 absolute`}></div>
            <img className={`absolute w-full h-full bottom-20 left-10`} width={400} src={Sticker} alt='sticker' />
          </div>
        </div>

        <div className={`flex flex-col items-center justify-center space-y-12`}>
          <Heading className={`text-gray-800 font-bold text-center`} title={`Setup the sticker your assets will be tagged with.`} size={2} />
          <ul className={`flex flex-col space-y-12 xl:space-y-0 xl:flex-row xl:space-x-24 circle_item`}>
            <li className={`space-y-6 pl-4`}>
              <Heading className={`font-medium text-lg`} title={`How It Works:`} size={3} />
              <Text
                className={`max-w-md text text-gray-600`}
                value={`When your field agent goes to the field for monthly visit, they wull be able to scan this sticker oFF the asset and answer pertinent qustions you might be curious about`}
              />
            </li>
            <li className={`space-y-6 pl-4`}>
              <Heading className={`font-medium text-lg`} title={`Information That Can Be Embeded`} size={3} />
              <ul className={`max-w-md text text-gray-600 space-y-6 dot_item`}>
                <li>Survey questions youd like the field agent to answer when they go for monthly visits</li>
                <li>Pictures and video</li>
                <li>Contact information</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={`flex space-x-4 md:space-x-12 justify-center bg-white w-full`}>
          <Button text={`Setup After`} type={`secondary`} onClick={() => history.goBack()} />
          <Button text={`Setup Sticker`} onClick={() => history.push('create-survey')} />
        </div>
      </div>
    </div>
  );
};

export default SetupStickers;
