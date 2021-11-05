import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useSelector } from 'react-redux';

import InputBox from '../../../../components/fragments/input-box';
import Button from '../../../../components/fragments/button';
import Heading from '../../../../components/fragments/heading';
import AssetsTable from '../../../../components/fragments/asset-table';

const AllAssets = () => {
  const assets = useSelector(state => state.assets);
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
        <div className={`flex items-center space-x-12`}>
          <Heading className={`text-brand_blue font-semibold`} title={`Assets`} />
          <div className={`w-80`}>
            <InputBox value={phrase} onValueChange={handleInputChange} name={`phrase`} placeholder={`Search...`} variant={4}  className={``} type={`search`} />
          </div>
        </div>
        <div className={`flex items-center space-x-6`}>
          <Button className={``} text={`View Asset Groups`} type={`secondary`} onClick={() => history.push('/assets/#')} />
          <Button className={``} text={`Onboard New Asset`} onClick={() => history.push('/onboarding/upload-assets')} />
        </div>
       </div>
      <AssetsTable data={assets} nameLink={true} />
    </FadeIn>
  );
};

export default AllAssets;
