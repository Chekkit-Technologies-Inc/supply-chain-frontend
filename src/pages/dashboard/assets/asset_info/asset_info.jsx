import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ImageFadeIn from 'react-image-fade-in';

// import BatteryImage from '../../../../assets/battery.png';
import SolarImage from '../../../../assets/solar.png';
import BarcodeImage from '../../../../assets/barcode.png';
// import ChargerImage from '../../../../assets/charger.png';
import { ReactComponent as Survey } from '../../../../assets/document.svg';

import Button from '../../../../components/fragments/button';
import Heading from '../../../../components/fragments/heading';

const AllAssets = () => {
  const history = useHistory();
  const { asset_id } = useParams();

  return (
    <FadeIn
      className={`flex flex-col justify-start
     space-y-6 p-6 py-16 min-h-screen w-full mx-auto bg-white`}
    >
      <div onClick={() => history.goBack()} className={`flex items-center space-x-2 cursor-pointer text-brand_blue font-semibold`}>
        <span>&larr;</span>
        <span>Back</span>
      </div>
      <div className={`flex flex-col space-y-4 xl:space-y-0 xl:flex-row items-center justify-between space-x-4`}>
        <div className={`flex items-center space-x-12`}>
          <Heading className={`text-brand_blue font-semibold`} title={`General Information`} />
        </div>
        <div className={`flex items-center space-x-6`}>
          <Button className={``} text={`Check Asset Vitals`} onClick={() => history.push(`/assets/${asset_id}/vitals`)} />
        </div>
      </div>

      <div className={`bg-gray-100 rounded-2xl flex flex-col 2xl:flex-row items-center`}>
        <div
          className={`border border-gray-400 rounded-2xl p-6 flex space-y-4 lg:space-x-4 lg:space-y-0 justify-center items-center bg-white flex-1 w-full h-96 flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-400`}
        >
          <div className={`h-full w-full flex flex-col justify-center items-center space-y-4`}>
            <div className='w-40 h-40'>
              <ImageFadeIn className='w-full h-full object-cover flex-shrink-0 rounded-2xl' src={SolarImage} alt='' opacityTransition={1} />
            </div>
            <div className={`font-semibold`}>Solar Panel</div>
            <div className={`flex items-center space-x-4`}>
              <span className={`text-gray-400`}>Asset Price</span>
              <span className={`font-semibold`}>35000.00</span>
            </div>

            <div className={`flex items-center space-x-4`}>
              <span className={`text-gray-400`}>Batch Number</span>
              <span className={`font-semibold`}>01-02022023</span>
            </div>

            <div className={`flex items-center space-x-4`}>
              <span className={`text-gray-400`}>Category</span>
              <span className={`font-semibold`}>Cat01</span>
            </div>
          </div>

          <div className={`h-full w-full flex flex-col justify-center items-center pt-6 lg:pt-0 lg:pl-6 space-y-4`}>
            <div className='h-40 flex items-center space-x-6'>
              <ImageFadeIn className='w-40 h-40 object-cover flex-shrink-0 rounded-2xl' src={BarcodeImage} alt='' opacityTransition={1} />
              <div className='w-40 h-40 flex flex-col space-y-6 justify-center items-center bg-yellow-100 p-4 rounded-2xl'>
                <Survey />
                <div className={`font-semibold underline text-brand_blue cursor-pointer`}>View Survey</div>
              </div>
            </div>

            <div className={`flex items-center space-x-4`}>
              <span className={`text-gray-400`}>Sticker ID</span>
              <span className={`font-semibold`}>01-02022021</span>
            </div>

            <div className={`flex items-center space-x-4`}>
              <span className={`text-gray-400`}>LOT Number</span>
              <span className={`font-semibold`}>0286108329</span>
            </div>

            <div className={`flex items-center space-x-4`}>
              <span className={`text-gray-400`}>Serial Number</span>
              <span className={`font-semibold`}>0286108329</span>
            </div>

            <div className={`flex items-center space-x-4`}>
              <span className={`text-gray-400`}>Phone Number</span>
              <span className={`font-semibold`}>011 867 450</span>
            </div>
          </div>
        </div>

        <div className={`flex flex-col items-center justify-center space-y-4 h-full p-6 px-24`}>
          <span>
            Installed By <span className={`font-bold`}>S.S. Alan</span>
          </span>
          <span>
            Date Installed <span className={`font-bold`}>Apr 20, 2021</span>
          </span>
          <div className={`font-semibold flex items-center justify-between space-x-4`}>
            <Button className={`w-full`} text={`Delete`} type={`secondary`} cx={2} size={2} />
            <Button className={`w-full`} cx={2} text={`Edit`} size={2} />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default AllAssets;
