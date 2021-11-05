import { CREATE_SITE, FETCH_SITES } from '../type';

const initialState = [];

const siteReducer = (sites = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_SITE:
      return [...sites, payload];
    case FETCH_SITES:
      return payload;
    default:
      return sites;
  }
};

export default siteReducer;
