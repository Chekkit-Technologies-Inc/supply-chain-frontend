import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FadeIn from 'react-fade-in/lib/FadeIn';

import Heading from '../../../../components/fragments/heading';
import Button from '../../../../components/fragments/button';
import AddSite from '../../../../components/fragments/add-site';
import { Site } from '../../../../models';

import { SiteActions } from '../../../../states/actions';
import { ResponseActions } from '../../../../states/actions';

const SetUpSite = () => {
  const [site, setSite] = useState(new Site());
  const history = useHistory();
  const dispatch = useDispatch();

  const createSites = () => {
    console.log(site);
    let create = site.manager_name && site.phone_number && site.email && site.address && site.country && site.latitude && site.longitude;

    if (!create) {
      dispatch(ResponseActions.notify({ title: 'Error', message: 'Incomplete site data', type: 'danger', loading: false }));
      return;
    }

    dispatch(SiteActions.createSite(site))
      .then(() => {
        setSite(new Site());
        history.push('/field-configuration/sites/map-preview');
      })
      .catch(console.log);
  };

  return (
    <FadeIn className={`flex flex-col min-h-screen justify-center space-y-6 p-6 pb-16 mx-auto w-full bg-dots`}>
      <Heading className={`font-medium text-center text-brand_blue`} title={`Provide Details Of The Site/Field`} size={2} />
      <AddSite site={site} setSite={setSite} />
      <div className={`flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12  justify-center`}>
        <Button text={`Back`} type={`secondary`} onClick={() => history.goBack()} />
        <Button text={`Skip`} type={`secondary`} onClick={() => history.push('/field-configuration/sites/map-preview')} />
        <Button text={`Continue`} onClick={createSites} />
      </div>
    </FadeIn>
  );
};

export default SetUpSite;
