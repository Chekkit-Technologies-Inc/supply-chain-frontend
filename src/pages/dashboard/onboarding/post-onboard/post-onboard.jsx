import React from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import { useSelector } from 'react-redux';

import { ReactComponent as Truck } from '../../../../assets/truck.svg';
import { ReactComponent as Barcode } from '../../../../assets/barcode-sm.svg';

import Heading from '../../../../components/fragments/heading';
import Text from '../../../../components/fragments/text';
import Button from '../../../../components/fragments/button';

const PostOnboard = () => {
  const assets = useSelector(state => state.assets);
  const history = useHistory();

  return (
    <FadeIn className={` px-4 sm:px-6 h-full bg-dots`}>
      <div className={`py-8 sm:py-16 space-y-6 w-full`}>
        <div className={`flex flex-col sm:flex-row space-y-4 sm:space-x-4 justify-start items-center`}>
          <Heading className={`text-brand_blue font-semibold`} title={`Post-Asset Onboarding`} size={2} />
        </div>
        <div className={`flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-6 w-full`}>
          <div className={`bg-gray-100 flex-1 rounded-lg p-6 lg:p-10 flex items-center space-x-4`}>
            <div className={`flex-1 space-y-6`}>
              <Heading className={`font-medium`} title={`${assets.length} ${assets.length === 1 ? `Asset` : `Assets`} onboarded`} size={2} />
              <Text
                className={`font-semibold underline text-brand_blue text-lg cursor-pointer`}
                value={`Onboard More Assets`}
                onClick={() => history.push('/onboarding/upload-assets')}
              />
            </div>
            <div className={`flex-1`}>
              <Truck className={`w-full h-full sm:w-60`} />
            </div>
          </div>
          <div className={`flex-1 rounded-lg space-y-6 py-6 lg:py-10 px-6 sm:px-0`}>
            <Barcode />
            <Text value={`You Have To Generate ${assets.length} Sticker IDs`} />
            <Button text={`Generate Sticker IDs`} onClick={() => history.push('/onboarding/onboarded-assets')} />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default PostOnboard;
