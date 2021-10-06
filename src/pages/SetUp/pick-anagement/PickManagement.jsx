import React from 'react';

import Heading from '../../../components/fragments/heading';
import ManagementList from '../../../components/fragments/management-list';
import Button from '../../../components/fragments/button';
import { setupData as data } from '../../../app-data';

const PickManagement = ({ onComplete }) => {
  return (
    <div className={`flex flex-col justify-center items-center space-y-6 p-6 pb-16 w-full min-h-screen mx-auto`}>
      <Heading className={`font-medium text-center`} title={data.pickManagement.title} size={2} />
      <ManagementList items={data.pickManagement.data} />
      <Button text={data.pickManagement.buttonText} onClick={() => onComplete('forward')} />
    </div>
  );
};

export default PickManagement;
