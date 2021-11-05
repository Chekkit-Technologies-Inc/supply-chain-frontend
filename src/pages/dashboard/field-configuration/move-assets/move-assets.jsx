import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import { useSelector } from 'react-redux';

import Heading from '../../../../components/fragments/heading';
import InputBox from '../../../../components/fragments/input-box';
import Button from '../../../../components/fragments/button';
import AssetTable from '../../../../components/fragments/asset-table';

const MoveAssets = () => {
  const history = useHistory();
  const assets = useSelector(state => state.assets);
  const [phrase, setPhrase] = useState('')

  const handleInputChange = event => {
    const { value } = event.target;
    setPhrase(value);
  };

  return (
    <FadeIn className={` px-4 sm:px-6 h-full bg-white`}>
      <div className={`py-8 sm:py-16 space-y-6 w-full`}>
        <div className={`flex flex-col sm:flex-row space-y-4 sm:space-x-4 justify-between items-center`}>
          <Heading className={`text-brand_blue font-semibold`} title={`Select asset to move to site`} size={2} />
          <div className={`w-96`}>
            <InputBox value={phrase} onValueChange={handleInputChange} name={`phrase`} placeholder={`Search...`} variant={4}  className={``} type={`search`} />
          </div>
        </div>
        <AssetTable data={assets} variant={3} />
        <div className={`flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12  justify-center`}>
          <Button text={`Back`} type={`secondary`} onClick={() => history.goBack()} />
          <Button text={`Move`} onClick={() => history.push('/field-configuration/sites/generate-code')} />
        </div>
      </div>
    </FadeIn>
  );
};

export default MoveAssets;
