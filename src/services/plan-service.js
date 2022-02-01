import http from '../http';

export const retrievePlans = async () => {
  return http().get(`/plans`);
};

export const subcribeToPlan = async id => {
  return http().post(`/plans/${id}/subscribe`);
};

const PlanService = {
  retrievePlans,
  subcribeToPlan,
};

export default PlanService;
