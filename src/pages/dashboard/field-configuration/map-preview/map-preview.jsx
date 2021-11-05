import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useSelector } from 'react-redux';

import InputBox from '../../../../components/fragments/input-box';
import Button from '../../../../components/fragments/button';
import SitesMap from '../../../../components/fragments/sites-map';
import {ReactComponent as Filter} from '../../../../assets/sites-filter.svg'

const MapPreview = () => {
  const sites = useSelector(state => state.sites);
  const [phrase, setPhrase] = useState('')
  const history = useHistory();

  const handleInputChange = event => {
    const { value } = event.target;
    setPhrase(value);
  };

  return (
    <FadeIn className={`flex flex-col justify-start
     space-y-6 p-6 py-16 min-h-screen w-full mx-auto bg-white`}>
       <div className={`flex flex-col space-y-4 xl:space-y-0 xl:flex-row items-center justify-between space-x-4`}>
        <div className={`flex items-center space-x-6`}>
          <div className={`w-96`}>
            <InputBox value={phrase} onValueChange={handleInputChange} name={`phrase`} placeholder={`Search...`} variant={4}  className={``} type={`search`} />
          </div>
          <div className={`border border-brand_blue rounded-xl p-2 cursor-pointer`}>
            <Filter />
          </div>
        </div>
        <div className={`flex items-center space-x-6`}>
          <Button className={``} text={`Add More Sites`} type={`secondary`} onClick={() => history.push('/field-configuration/sites/add-site')} />
          <Button className={``} text={`Move Assets To Site`} onClick={() => history.push('/field-configuration/sites/move-sites')} />
        </div>
       </div>
      <SitesMap sites={sites} />
    </FadeIn>
  );
};

export default MapPreview;
