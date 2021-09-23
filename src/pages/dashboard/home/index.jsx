import React from 'react';
import { Route } from 'react-router-dom';

import AssetOnboard from './AssetOnboard'
import UploadAssets from './UploadAssets'

const Home = () => {
  return (
    <>

      <Route exact path={'/dashboard'}>
        <AssetOnboard />
      </Route>

      <Route path={'/dashboard/upload-assets'}>
        <UploadAssets />
      </Route>

    </>
  )
};

export default Home;
