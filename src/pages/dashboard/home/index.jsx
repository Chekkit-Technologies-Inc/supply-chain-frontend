import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import AssetOnboard from './AssetOnboard';
import UploadAssets from './UploadAssets';
import UploadedAssets from './UploadedAssets';
import SetupStickers from './SetupStickers';
import CreateSurvey from './CreateSurvey';
import EmbedInfo from './EmbedInfo';
import GenerateCode from './GenerateCode';
import OnboardSuccess from './OnboardSuccess';

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
