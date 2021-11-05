import { NOTIFY, LOADING } from '../type';
import { Response } from '../../models';

const initialState = new Response();

const responseReducer = (response = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case NOTIFY:
      return payload;
    case LOADING:
      return { ...initialState, loading: payload };
    default:
      return response;
  }
};

export default responseReducer;
