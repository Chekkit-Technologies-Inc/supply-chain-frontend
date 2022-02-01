import { FETCH_PLANS, SUBSCRIBE_TO_PLAN } from '../type';

const initialState = [];

const planReducer = (plans = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PLANS:
      return payload;
    case SUBSCRIBE_TO_PLAN:
      return plans;
    default:
      return plans;
  }
};

export default planReducer;
