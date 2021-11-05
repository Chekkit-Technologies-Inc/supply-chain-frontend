import React from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useSelector } from 'react-redux';

import Heading from '../../../../components/fragments/heading';
import Button from '../../../../components/fragments/button';
import AssetTable from '../../../../components/fragments/asset-table/asset-table';

const UploadedAssets = () => {
  const assets = useSelector(state => state.assets);
  const history = useHistory();
  return (
    <FadeIn className={` px-4 sm:px-6 bg-white h-full`}>
      <div className={`py-8 sm:py-16 bg-white space-y-6 w-full`}>
        <div className={`flex flex-col sm:flex-row space-y-4 sm:space-x-4 justify-between items-center`}>
          <Heading className={`text-brand_blue`} title={`Uploaded CSV`} size={2} />
          <Button className={``} text={`Upload More Data`} size={2} onClick={() => history.push('/onboarding/upload-assets')} />
        </div>
        <AssetTable data={assets} />
        <div className={`flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12  justify-center`}>
          <Button text={`Back`} type={`secondary`} onClick={() => history.goBack()} />
          <Button text={`Continue`} onClick={() => history.push('/onboarding/setup-stickers')} />
        </div>
      </div>
    </FadeIn>
  );
};

export default UploadedAssets;
