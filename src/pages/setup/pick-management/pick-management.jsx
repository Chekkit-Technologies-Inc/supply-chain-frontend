import React from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import Heading from '../../../components/fragments/heading';
import ManagementList from '../../../components/fragments/management-list';
import Button from '../../../components/fragments/button';
import { setupData as data } from '../../../app-data';

const PickManagement = () => {
  const history = useHistory();
  return (
    <FadeIn className={`flex flex-col justify-center items-center space-y-6 p-6 pb-16 w-full min-h-screen mx-auto`}>
      <Heading className={`font-medium text-center`} title={data.pickManagement.title} size={2} />
      <ManagementList items={data.pickManagement.data} />
      <Button className={`w-80`} text={data.pickManagement.buttonText} onClick={() => history.push('/setup/pick-plan')} />
    </FadeIn>
  );
};

export default PickManagement;
