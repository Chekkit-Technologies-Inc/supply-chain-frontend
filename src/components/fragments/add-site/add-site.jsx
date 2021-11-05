import { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

import InputBox from '../input-box';

const AddSite = ({ site, setSite }) => {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    if (site) {
      setDetail(site);
    }
  }, [site]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'address') {
      setSite({ ...site, [name]: value, state: '', country: '', latitude: '', longitude: '' });
    } else {
      setSite({ ...site, [name]: value });
    }
  };

  const handleAddressChange = place => {
    const address = place.formatted_address;
    const latitude = place.geometry.location.lat();
    const longitude = place.geometry.location.lng();
    setSite({ ...site, address, latitude, longitude });
  };

  const onFocusChange = () => {
    setTimeout(() => {
      if (!site.latitude && !site.longitude) {
        setSite({ ...site, address: '', state: '', country: '' });
        return;
      }
    }, 0);
  };

  useEffect(() => {
    if (site.address && site.latitude && site.longitude) {
      let arr = site?.address?.split(',');
      let address = arr.slice(0, arr.length - 1).join('');
      let address2 = arr.slice(0, arr.length - 2).join('');
      let country = arr[arr.length - 1].replace(' ', '');
      let arr2 = address.split(' ');
      let state = arr2[arr2.length - 1];
      setSite({ ...site, ...detail, address: address2, latitude: site.latitude, longitude: site.longitude, state, country });
    } // eslint-disable-next-line
  }, [site.latitude, site.longitude]);

  return (
    <FadeIn className={`px-6 md:px-12 py-16 bg-brand_blue rounded-3xl max-w-6xl mx-auto space-6-12 w-full`}>
      <form autoComplete={`off`} className={`space-y-14`}>
        <div className={`flex flex-col space-y-6 xl:flex-row xl:space-x-6 xl:space-y-0`}>
          <InputBox
            label={`Site Manager`}
            name={`manager_name`}
            value={site.manager_name}
            onValueChange={handleInputChange}
            labelColor={`text-gray-200`}
            placeholder={`Type Here`}
            required={true}
          />
          <InputBox
            label={`Phone Number`}
            name={`phone_number`}
            value={site.phone_number}
            onValueChange={handleInputChange}
            labelColor={`text-gray-200`}
            placeholder={`Type Here`}
            required={true}
          />
          <InputBox
            label={`Email Address`}
            name={`email`}
            value={site.email}
            onValueChange={handleInputChange}
            labelColor={`text-gray-200`}
            placeholder={`Type Here`}
            required={true}
          />
        </div>
        <div className={`flex flex-col space-y-6 xl:flex-row xl:space-x-6 xl:space-y-0`}>
          <InputBox
            label={`Address`}
            labelColor={`text-gray-200`}
            placeholder={`Type Here`}
            variant={'places'}
            name={`address`}
            placeType={`address`}
            value={site?.address}
            onValueChange={handleInputChange}
            onPlaceSelected={handleAddressChange}
            onFocusChange={onFocusChange}
            required={true}
          />
          <InputBox
            label={`State`}
            name={`state`}
            defaultValue={site?.state}
            labelColor={`text-gray-200`}
            placeholder={`Type Here`}
            readOnly={true}
            required={true}
          />
          <InputBox
            label={`Country`}
            name={`country`}
            defaultValue={site?.country}
            labelColor={`text-gray-200`}
            placeholder={`Type Here`}
            readOnly={true}
            required={true}
          />
        </div>
      </form>
    </FadeIn>
  );
};

export default AddSite;
