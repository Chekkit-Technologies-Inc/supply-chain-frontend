import React from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import { useSelector } from 'react-redux';

import Heading from '../../../../components/fragments/heading';
import Button from '../../../../components/fragments/button';
import AssetTable from '../../../../components/fragments/asset-table';

const OnboardedAssets = () => {
  const history = useHistory();
  const assets = useSelector(state => state.assets);

  return (
    <FadeIn className={` px-4 sm:px-6 h-full bg-white`}>
      <div className={`py-8 sm:py-16 space-y-6 w-full`}>
        <div className={`flex flex-col sm:flex-row space-y-4 sm:space-x-4 justify-start items-center`}>
          <Heading className={`text-brand_blue font-semibold`} title={`Onboarded Assets`} size={2} />
        </div>
        <AssetTable data={assets} variant={2} />
        <div className={`flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12  justify-center`}>
          <Button text={`Back`} type={`secondary`} onClick={() => history.goBack()} />
          <Button text={`Print Stickers`} onClick={() => history.push('/onboarding/sticker-id-success')} />
        </div>
      </div>
    </FadeIn>
  );
};

export default OnboardedAssets;
