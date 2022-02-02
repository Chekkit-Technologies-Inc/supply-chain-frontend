import { SUBSCRIBE_TO_PLAN, FETCH_PLANS } from '../type';
import { notify, loading } from './response';

import { PlanService } from '../../services';
import { UserActions } from '../actions';

export const subcribeToPlan = id => async dispatch => {
  dispatch(loading({ loading: true }));
  try {
    const res = await PlanService.subcribeToPlan(id);

    dispatch(notify({ title: res.data.status, message: 'Plan requested successfully', type: 'success', loading: false }));

    dispatch({
      type: SUBSCRIBE_TO_PLAN,
    });

    dispatch(UserActions.fetchUser());
    return Promise.resolve(res.data);
  } catch (err) {
    dispatch(notify({ title: err.name, message: err.response?.data?.error || err.message, type: 'danger', loading: false }));
    return Promise.reject(err);
  }
};

export const fetchPlans = () => async dispatch => {
  dispatch(loading({ loading: true }));
  try {
    const res = await PlanService.retrievePlans();

    // dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    dispatch(notify({ loading: false }));

    dispatch({
      type: FETCH_PLANS,
      payload: res.data.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    // dispatch(notify({ title: err.name, message: err.response?.data?.error || err.message, type: 'danger', loading: false }));

    dispatch(notify({ loading: false }));
    return Promise.reject(err);
  }
};

const PlanActions = {
  subcribeToPlan,
  fetchPlans,
};

export default PlanActions;
