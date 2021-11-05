import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AssetOnboard from './asset-onboard';
import GetStarted from './get-started';
import UploadAssets from './upload-assets';
import UploadedAssets from './uploaded-assets';
import SetupStickers from './setup-stickers';
import CreateSurvey from './create-survey';
import SurveyEdit from '../../../components/fragments/survey-edit/survey-edit';
import SurveyPreview from '../../../components/fragments/survey-preview/survey-preview';
import EmbedInfo from './embed-info';
import GenerateCode from './generate-code';
import OnboardSuccess from './onboard-success';
import PostOnboard from './post-onboard';
import OnboardedAssets from './onboarded-assets';
import StickerPrintSuccess from './sticker-print-success';

const Onboarding = () => {
  return (
    <Switch>
      <Route exact path={'/onboarding'}>
        <AssetOnboard />
      </Route>

      <Route exact path={'/onboarding/get-started'}>
        <GetStarted />
      </Route>

      <Route exact path={'/onboarding/upload-assets'}>
        <UploadAssets />
      </Route>

      <Route exact path={'/onboarding/uploaded-assets'}>
        <UploadedAssets />
      </Route>

      <Route exact path={'/onboarding/setup-stickers'}>
        <SetupStickers />
      </Route>

      <Route exact path={'/onboarding/create-survey'}>
        <CreateSurvey />
      </Route>

      <Route exact path={'/onboarding/create-survey/survey-edit'}>
        <SurveyEdit />
      </Route>

      <Route exact path={'/onboarding/create-survey/survey-preview'}>
        <SurveyPreview />
      </Route>

      <Route exact path={'/onboarding/embed-info'}>
        <EmbedInfo />
      </Route>

      <Route exact path={'/onboarding/generate-code'}>
        <GenerateCode />
      </Route>

      <Route exact path={'/onboarding/onboarding-success'}>
        <OnboardSuccess />
      </Route>
      <Route exact path={'/onboarding/post-onboard'}>
        <PostOnboard />
      </Route>
      <Route exact path={'/onboarding/onboarded-assets'}>
        <OnboardedAssets />
      </Route>
      <Route exact path={'/onboarding/sticker-id-success'}>
        <StickerPrintSuccess />
      </Route>
      <Redirect to={`/404`} />
    </Switch>
  );
};

export default Onboarding;
