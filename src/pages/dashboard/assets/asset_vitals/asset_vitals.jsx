import React from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';

import Heading from '../../../../components/fragments/heading';
import AssetTable from '../../../../components/fragments/asset-table';

import { ReactComponent as TempChart } from '../../../../assets/temp_chart.svg';
import { ReactComponent as HumidChart } from '../../../../assets/humid_chart.svg';

const data = [
  { day: 'Sun', time: '8:30', initial_temp: '30C', final_temp: '30C', date: 'Apr 20, 2021' },
  { day: 'Mon', time: '8:30', initial_temp: '30C', final_temp: '30C', date: 'Apr 20, 2021' },
  { day: 'Tue', time: '8:30', initial_temp: '30C', final_temp: '30C', date: 'Apr 20, 2021' },
  { day: 'Wed', time: '8:30', initial_temp: '30C', final_temp: '30C', date: 'Apr 20, 2021' },
];

const AssetVitals = () => {
  const history = useHistory();

  return (
    <FadeIn
      className={`flex flex-col justify-start
     space-y-6 p-6 py-16 min-h-screen w-full mx-auto bg-white`}
    >
      <div onClick={() => history.goBack()} className={`flex items-center space-x-2 cursor-pointer text-brand_blue font-semibold`}>
        <span>&larr;</span>
        <span>Back</span>
      </div>
      <div className={`flex justify-between items-start space-y-16 xl:space-x-16 xl:space-y-0 flex-col xl:flex-row`}>
        <div className={`flex-1 space-y-8 w-full`}>
          <div>
            <Heading className={`font-semibold text-gray-700`} title={`Daily Temperature`} size={3} />
            <AssetTable data={data} variant={4} />
          </div>
          <div className={`space-y-6`}>
            <div className={`flex justify-between items-center space-x-4`}>
              <Heading className={`font-semibold text-gray-700`} title={`Temperature Chart`} size={3} />
              <div className={`text-gray-400 border border-gray-400 p-2 rounded-xl font-medium`}>This Week</div>
            </div>
            <div>
              <TempChart className={`w-full`} />
            </div>
          </div>
        </div>
        <div className={`flex-1 space-y-8 w-full`}>
          <div>
            <Heading className={`font-semibold text-gray-700`} title={`Daily Humidity`} size={3} />
            <AssetTable data={data} variant={4} />
          </div>
          <div className={`space-y-6`}>
            <div className={`flex justify-between items-center space-x-4`}>
              <Heading className={`font-semibold text-gray-700`} title={`Humidity Chart`} size={3} />
              <div className={`text-gray-400 border border-gray-400 p-2 rounded-xl font-medium`}>This Week</div>
            </div>
            <div>
              <HumidChart className={`w-full`} />
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default AssetVitals;
