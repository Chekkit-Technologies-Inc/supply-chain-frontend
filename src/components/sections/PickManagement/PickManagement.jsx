import React from 'react';

import Heading from '../../fragments/Heading/';
import ManagementList from '../../fragments/ManagementList';
import Button from '../../fragments/Button';
import { setupData as data } from '../../../appData';

const PickManagement = ({ onComplete }) => {
  return (
    <div className={`flex flex-col items-center space-y-6 mx-auto`}>
      <Heading className={`font-medium text-center`} title={data.pickManagement.title} size={2} />
      <ManagementList items={data.pickManagement.data} />
      <Button text={data.pickManagement.buttonText} onClick={() => onComplete('forward')} />
    </div>
  );
};

export default PickManagement;
