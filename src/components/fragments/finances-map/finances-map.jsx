import React from 'react';
import GoogleMap from 'google-map-react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as LocationIcon } from '../../../assets/location-pink.svg';

const FinancesMap = ({ sites }) => {
  return (
    <div style={{ height: '600px' }} className={`bg-gray-200 rounded-3xl w-full overflow-hidden`}>
      <GoogleMap
        bootstrapURLKeys={{
          key: process.env.REACT_APP_MAP_API_KEY,
          language: 'en',
          region: 'US',
        }}
        defaultCenter={{ lat: 6.449, lng: 3.424 }}
        defaultZoom={2}
      >
        {sites &&
          sites.length > 0 &&
          sites.map(({ id, state, country, latitude, longitude }, idx) => {
            return <MapMarker key={id} idx={idx} state={state} country={country} lat={latitude} lng={longitude} />;
          })}
      </GoogleMap>
    </div>
  );
};

const MapMarker = ({ idx, state, country }) => {
  const history = useHistory();

  return (
    <div className={`relative top-10`}>
      <div className={'w-40 text-gray-800 tooltip transform -translate-y-12 flex items-center space-x-2 shadow-lg rounded-lg p-2'}>
        <div className={`w-7 h-7`}>
          <LocationIcon className={`w-full h-full`} />
        </div>
        <div className={`space-y-1`}>
          <div>
            <span>{`${state}, `}</span>
            <span>{country}</span>
          </div>
          <div onClick={() => history.push(`/finances/sites/${idx}`)} className={`font-semibold text-brand_blue underline`}>
            View Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancesMap;
