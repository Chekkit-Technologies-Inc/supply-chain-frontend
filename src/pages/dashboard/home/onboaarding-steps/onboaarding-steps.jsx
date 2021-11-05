import React from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import { useSelector } from 'react-redux';

import { ReactComponent as Truck } from '../../../../assets/truck.svg';
import { ReactComponent as Location } from '../../../../assets/location.svg';
import { ReactComponent as CheckGreen } from '../../../../assets/check-green.svg';
import { ReactComponent as CheckGray } from '../../../../assets/check-gray.svg';

import Heading from '../../../../components/fragments/heading';
import Text from '../../../../components/fragments/text';

const OnboardingSteps = () => {
  const assets = useSelector(state => state.assets);
  const sites = useSelector(state => state.sites);
  const history = useHistory();

  return (
    <FadeIn className={` px-4 sm:px-6 h-full bg-dots`}>
      <div className={`py-8 sm:py-16 space-y-6 w-full bg-white`}>
        <div className={`flex space-x-1 justify-start items-center`}>
          <Heading className={`text-brand_blue font-semibold`} title={`Onboarding Steps`} />
          { assets.length > 0 && sites.length > 0 && <Heading className={`text-brand_blue font-semibold`} title={`: Completed!`} />}
        </div>
        <div className={`flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-6 w-full`}>
          <div className={`bg-gray-100 flex-1 rounded-lg p-6 lg:p-10 flex flex-col items-center justify-center space-y-6 max-w-lg`}>
            <Heading className={`font-medium`} title={`Step 1: Asset onboarding`} size={2} />

            <div className={`w-32 md:w-48`}>
              <Truck className={`w-full h-full`} />
            </div>

            <div className={`bg-white p-4 rounded-2xl flex items-center justify-between space-x-4 w-full`}>
              {assets.length > 0 ? <Text className={`text-brand_blue`} value={`Assets has been onboarding successfully!`} /> : <Text
                className={`text-brand_blue font-semibold underline cursor-pointer`}
                value={`Onboard assets`}
                onClick={() => history.push('/onboarding/upload-assets')}
              /> }

              <div className={`w-8`}>
                {assets.length > 0 ? <CheckGreen className={`w-full h-full`} /> : <CheckGray className={`w-full h-full`} />}
              </div>
            </div>
          </div>

          <div className={`bg-gray-100 flex-1 rounded-lg p-6 lg:p-10 flex flex-col items-center justify-center space-y-6 max-w-lg`}>
            <Heading className={`font-medium`} title={`Step 2: Field configuration`} size={2} />

            <div className={`w-32 md:w-48`}>
              <Location className={`w-full h-full`} />
            </div>

            <div className={`bg-white p-4 rounded-2xl flex items-center justify-between space-x-4 w-full`}>
              {sites.length > 0 ? <Text className={`text-brand_blue`} value={`Field configuration done successfully!`} /> : <Text
                className={`text-brand_blue font-semibold ${assets.length < 1 ? `pointer-events-none opacity-50` : `underline cursor-pointer`}`}
                value={`Continue onboarding`}
                onClick={() => history.push('/field-configuration')}
              />}
              <div className={`w-8`}>
              {sites.length > 0 ? <CheckGreen className={`w-full h-full`} /> : <CheckGray className={`w-full h-full`} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default OnboardingSteps;
