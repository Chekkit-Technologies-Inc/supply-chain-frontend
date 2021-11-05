import React, { useState } from 'react';
import ImageFadeIn from 'react-image-fade-in';
import FadeIn from 'react-fade-in/lib/FadeIn';

import BatteryImage from '../../../assets/battery.png';
import SolarImage from '../../../assets/solar.png';
import ChargerImage from '../../../assets/charger.png';
import { ReactComponent as Checked } from '../../../assets/radio-checked.svg';
import { ReactComponent as Unchecked } from '../../../assets/radio-unchecked.svg';
import { ReactComponent as DownloadIcon } from '../../../assets/download.svg';
import sampleData from '../../../assets/sample.csv';

import Text from '../text';

const assetTypes = [
  {
    name: 'Battery',
    alt: 'Batteries',
    imageUrl: BatteryImage,
    sample: sampleData,
  },
  {
    name: 'Solar Panel',
    alt: 'Panels',
    imageUrl: SolarImage,
    sample: sampleData,
  },
  {
    name: 'Charger Controller',
    alt: 'Chargers',
    imageUrl: ChargerImage,
    sample: sampleData,
  },
];

const AssetUploadList = () => {
  const [current, setCurrent] = useState(0);

  return (
    <FadeIn className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {assetTypes.map((item, idx) => (
        <div key={idx} className={`space-y-6`}>
          <div onClick={() => setCurrent(idx)} className='col-span-1 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow cursor-pointer'>
            <div className='w-full'>
              <ImageFadeIn className='w-full h-60 object-cover  flex-shrink-0' src={item.imageUrl} alt='' opacityTransition={1} />
            </div>
            <div>
              <div className='flex items-center space-x-6 p-8'>
                {idx === current ? <Checked /> : <Unchecked />}
                <Text className={`text-base xl:text-lg font-medium text-brand_blue`} value={item.name} />
              </div>
            </div>
          </div>
          {idx === current && (
            <div className={`flex items-center justify-between space-x-6`}>
              <Text className={`text-brand_blue text-sm`} value={`${item.alt} CSV Template`} />
              <a href={item.sample} className={`flex items-center`} download={item.alt}>
                <DownloadIcon />
                <Text className={`text-brand_blue font-medium text-sm ml-4 underline cursor-pointer`} value={`Download`} />
              </a>
            </div>
          )}
        </div>
      ))}
    </FadeIn>
  );
};

export default AssetUploadList;
