import React, { useState } from 'react';
import GoogleMap from 'google-map-react';

import { ReactComponent as LocationIcon } from '../../../assets/location-pink.svg';
import Button from '../button';

const SiteMap = ({ sites }) => {
  const [selected, setSelected] = useState();

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
          sites.map(({ latitude, longitude, id, manager_name, email, phone_number, address, state, country }, idx) => {
            return (
              <MapMarker
                key={id}
                idx={idx}
                selected={idx === selected}
                setSelected={setSelected}
                lat={latitude}
                lng={longitude}
                manager_name={manager_name}
                email={email}
                phone_number={phone_number}
                address={address}
                state={state}
                country={country}
              />
            );
          })}
      </GoogleMap>
    </div>
  );
};

const MapMarker = ({ idx, selected, setSelected, manager_name, email, phone_number, lat, lng, address, state, country }) => {
  const handleClick = () => {
    console.log(`You clicked on ${manager_name}`);
  };

  return (
    <div className={`relative top-10`}>
      <div
        className={'w-40 text-gray-800 tooltip transform -translate-y-12 flex items-center space-x-2 shadow-lg rounded-lg p-2'}
        onClick={handleClick}
        title={manager_name}
      >
        <div className={`w-7 h-7`}>
          <LocationIcon className={`w-full h-full`} />
        </div>
        <div className={`space-y-1`}>
          <div>
            <span>{`${state}, `}</span>
            <span>{country}</span>
          </div>
          <div onClick={() => setSelected(idx)} className={`font-semibold text-brand_blue underline`}>
            View Details
          </div>
        </div>
      </div>
      {selected && (
        <div style={{ zIndex: '6000px' }} className={`bg-white rounded-lg px-4 -mt-6 m-6 w-64 shadow divide divide-y divide-gray-100 text-sm`}>
          <div className={`font-semibold py-4`}>Site Details</div>
          <div className={`font-semibold py-4 flex items-center justify-between space-x-4`}>
            <div className={`overflow-auto flex-1`}>
              <div className={`text-gray-400`}>Site Manager</div>
              <div className={`capitalize`}>{manager_name}</div>
            </div>
            <div className={`overflow-auto flex-1`}>
              <div className={`text-gray-400`}>Site Location</div>
              <div className={`capitalize`}>{`${state}, ${country}`}</div>
            </div>
          </div>
          <div className={`font-semibold py-4 flex items-center justify-between space-x-4`}>
            <div className={`overflow-auto flex-1`}>
              <div className={`text-gray-400`}>Email Address</div>
              <div>{email}</div>
            </div>
            <div className={`overflow-auto flex-1`}>
              <div className={`text-gray-400`}>Phone Number</div>
              <div>{phone_number}</div>
            </div>
          </div>
          <div className={`font-semibold py-4 flex items-center justify-between space-x-4`}>
            <Button className={`w-full`} text={`Back`} type={`secondary`} cx={2} size={2} />
            <Button className={`w-full`} cx={2} text={`Edit`} size={2} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SiteMap;
