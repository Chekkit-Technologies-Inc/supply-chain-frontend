import React from 'react';

import Heading from '../../fragments/Heading/';
import ManagementList from '../../fragments/ManagementList';
import Button from '../../fragments/Button';
import { setupData as data } from '../../../appData';

const PickManagement = () => {
  return (
    <div className={`flex flex-col justify-center items-center space-y-12 h-full`}>
      <Heading className={`font-semibold text-center`} title={data.title} size={2} />
      <ManagementList items={data.data} />
      <Button text={data.buttonText} />
    </div>
  );
};

export default PickManagement;
