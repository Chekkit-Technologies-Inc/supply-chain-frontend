import React from 'react';
import { useHistory } from 'react-router-dom';

import Heading from '../../../../components/fragments/Heading';
import Button from '../../../../components/fragments/Button';
import AssetTable from '../../../../components/fragments/AssetTable/AssetTable';

const UploadedAssets = ({ data }) => {
  const history = useHistory();
  return (
    <div className={` px-4 sm:px-6 bg-white h-full`}>
      <div className={`py-8 sm:py-16 bg-white space-y-6 w-full`}>
        <div className={`flex flex-col sm:flex-row space-y-4 sm:space-x-4 justify-between items-center`}>
          <Heading className={`text-brand_blue`} title={`Uploaded CSV`} size={2} />
          <Button className={``} text={`Upload More Data`} size={2} />
        </div>
        <AssetTable data={data} />
        <div className={`flex space-x-4 md:space-x-12 justify-center`}>
          <Button text={`Back`} type={`secondary`} onClick={() => history.goBack()} />
          <Button text={`Continue`} onClick={() => history.push('/dashboard/setup-stickers')} />
        </div>
      </div>
    </div>
  );
};

export default UploadedAssets;
