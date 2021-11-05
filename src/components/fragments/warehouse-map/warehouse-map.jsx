import React from 'react';
import GoogleMap from 'google-map-react';

import { ReactComponent as LocationIcon } from '../../../assets/location-pink.svg';

const WarehouseMap = ({ warehouses }) => {
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
        {warehouses &&
          warehouses.length > 0 &&
          warehouses.map(({ latitude, longitude, id, name, address, state, country }) => {
            return <MapMarker key={id} lat={latitude} lng={longitude} name={name} address={address} state={state} country={country} />;
          })}
      </GoogleMap>
    </div>
  );
};

const MapMarker = ({ name, lat, lng, address, state, country }) => {
  const handleClick = () => {
    console.log(`You clicked on ${name}`);
  };

  return (
    <div className={'w-40 text-gray-800 tooltip transform -translate-y-12 flex items-center space-x-2'} onClick={handleClick} title={name}>
      <div className={`w-10 h-10`}>
        <LocationIcon className={`w-full h-full`} />
      </div>
      <div className={`space-y-2`}>
        <div className={`font-medium`}>
          <span>{`${state}, `}</span>
          <span>{country}</span>
        </div>
        <div className={`font-semibold text-brand_blue underline`}>View Details</div>
      </div>
    </div>
  );
};

export default WarehouseMap;
