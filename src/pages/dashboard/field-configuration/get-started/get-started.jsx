import React from 'react';

import FadeIn from 'react-fade-in/lib/FadeIn';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReactComponent as Truck } from '../../../../assets/truck.svg';
import { ReactComponent as Location } from '../../../../assets/location.svg';
import { ReactComponent as WorldMap } from '../../../../assets/world-map.svg';
import Button from '../../../../components/fragments/button';
import Heading from '../../../../components/fragments/heading';
import Text from '../../../../components/fragments/text';

const GetStarted = () => {
  const sites = useSelector(state => state.sites);
  const history = useHistory();
  return (
    <>
      {sites.length < 1 ? (
        <FadeIn className={`p-6 py-12 min-h-screen w-full flex flex-col space-y-6 bg-world`}>
          <Heading className={`font-medium`} title={`Field Configuration`} />
          <Text value={`Click the below button to add sites to move your assets`} />
          <div className={`flex-shrink-0 overflow-auto`}>
            <WorldMap style={{ height: '800px' }} className={`flex-shrink-0 mx-auto pb-4`} />
          </div>
          <Button className={`w-40 mx-auto`} text={`Add Sites`} onClick={() => history.push('/field-configuration/sites/add-site')} />
        </FadeIn>
      ) : (
        <FadeIn className={` px-4 sm:px-6 h-full bg-dots`}>
          <div className={`py-8 sm:py-16 space-y-6 w-full bg-white`}>
            <div className={`flex space-x-1 justify-start items-center`}>
              <Heading className={`text-brand_blue font-semibold`} title={`Field Configuration`} />
            </div>
            <div className={`flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-6 w-full`}>
              <div
                onClick={() => history.push('field-configuration/my-warehouses')}
                className={`bg-gray-100 flex-1 rounded-lg p-6 lg:p-10 flex flex-col items-center justify-center space-y-6 max-w-sm cursor-pointer`}
              >
                <div className={`w-24`}>
                  <Truck className={`w-full h-full`} />
                </div>

                <Heading className={`font-medium`} title={`My Warehouses`} size={2} />
              </div>

              <div
                onClick={() => history.push('field-configuration/my-sites')}
                className={`bg-gray-100 flex-1 rounded-lg p-6 lg:p-10 flex flex-col items-center justify-center space-y-6 max-w-sm cursor-pointer`}
              >
                <div className={`w-24`}>
                  <Location className={`w-full h-full`} />
                </div>

                <Heading className={`font-medium`} title={`My Sites`} size={2} />
              </div>
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default GetStarted;
