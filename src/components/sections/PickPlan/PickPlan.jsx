import React from 'react';

import PlanList from '../../fragments/PlanList';
import { setupData as data } from '../../../appData';

const PickPlan = ({ onComplete }) => {
  return (
    <div className={`flex flex-col justify-center items-center space-y-6 p-6 pb-16 w-full min-h-screen mx-auto`}>
      <div>Emmanuel</div>
      <PlanList items={data.pickPlan} onComplete={onComplete} />
      <div>Schedule</div>
    </div>
  );
};

export default PickPlan;
