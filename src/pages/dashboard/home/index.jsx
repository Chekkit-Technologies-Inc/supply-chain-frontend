import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import AssetOnboard from './asset-onboard';
import UploadAssets from './upload-assets';
import UploadedAssets from './uploaded-assets';
import SetupStickers from './setup-stickers';
import CreateSurvey from './create-survey';
import EmbedInfo from './embed-info';
import GenerateCode from './generate-code';
import OnboardSuccess from './onboard-success';

const Home = () => {
  const [csvData, setCsvData] = useState(null);
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

      <Route path={'/dashboard/setup-stickers'}>
        <SetupStickers />
      </Route>

      <Route path={'/dashboard/create-survey'}>
        <CreateSurvey />
      </Route>

      <Route path={'/dashboard/embed-info'}>
        <EmbedInfo />
      </Route>

      <Route path={'/dashboard/generate-code'}>
        <GenerateCode />
      </Route>

      <Route path={'/dashboard/onboarding-success'}>
        <OnboardSuccess />
      </Route>
    </>
  );
};

export default Home;
