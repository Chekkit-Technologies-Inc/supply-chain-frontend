import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from '../404-page';
import Logo from '../../components/fragments/logo';
import Container from '../../components/layout/container';
import PickManagement from './pick-management';
import PickPlan from './pick-plan';
import SetUpWarehouse from './setup-warehouse';
import MapPreview from './map-preview';
import SetUpHardware from './setup-hardware';
import HardwarePreview from './hardware-preview';
import Activation from './activation';
import ActivationSuccess from './activation-success';

const SetUp = () => {
  return (
    <div className={`min-h-screen bg`}>
      <Route exact path={['/setup/hardware', '/setup/hardware/preview']}>
        <div className={`w-full px-6 2xl:px-52 pt-8 max-w-3000 mx-auto`}>
          <Logo size={180} />
        </div>
      </Route>
      <Container className={`w-full max-w-7xl mx-auto`}>
        <Switch>
          <Route exact path={'/setup/pick-management'}>
            <PickManagement />
          </Route>
          <Route exact path={'/setup/pick-plan'}>
            <PickPlan />
          </Route>
          <Route exact path={'/setup/warehouse'}>
            <SetUpWarehouse />
          </Route>
          <Route exact path={'/setup/warehouse/map-preview'}>
            <MapPreview />
          </Route>
          <Route exact path={'/setup/hardware'}>
            <SetUpHardware />
          </Route>
          <Route exact path={'/setup/hardware/preview'}>
            <HardwarePreview />
          </Route>
          <Route exact path={'/setup/activation'}>
            <Activation />
          </Route>
          <Route exact path={'/setup/activation/success'}>
            <ActivationSuccess />
          </Route>
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
  );
};

export default SetUp;
