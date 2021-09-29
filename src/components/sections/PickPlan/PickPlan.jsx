import React from 'react';

import PlanList from '../../fragments/PlanList';


import { setupData as data } from '../../../appData';

const PickPlan = ({ onComplete }) => {
  return (
    <div className={`flex flex-col justify-between items-center space-y-6 p-6 py-16 w-full min-h-screen mx-auto`}>
      <div className={`text-center text-xl space-y-1`}>
        <div>Thank you for signing up <span className={`font-bold text-brand_blue`}>Emmanuel,</span></div>
        <div>Please select a plan so we can tailor your experience</div>
      </div>
      <PlanList items={data.pickPlan} onComplete={onComplete} />
      <div className={`text-center`}>
        <div className={`text-brand_blue_light`}>Would you like to talk to us more about this? <span className={`font-bold text-brand_blue`}>Schedule a Call</span></div>
      </div>
    </div>
  );
};

export default PickPlan;
