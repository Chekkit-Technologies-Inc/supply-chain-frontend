import React, {useState} from 'react';
import { Route } from 'react-router-dom';

import AssetOnboard from './AssetOnboard'
import UploadAssets from './UploadAssets'
import UploadedAssets from './UploadedAssets'

const Home = () => {
  const [csvData, setCsvData] = useState(null)
  return (
    <>

      <Route exact path={'/dashboard'}>
        <AssetOnboard />
      </Route>

      <Route path={'/dashboard/upload-assets'}>
        <UploadAssets onSuccess={setCsvData} />
      </Route>

      <Route path={'/dashboard/uploaded-assets'}>
        <UploadedAssets data={csvData} />
      </Route>

    </>
  )
};

export default Home;
