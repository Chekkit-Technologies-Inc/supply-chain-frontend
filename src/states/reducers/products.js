import { FETCH_PRODUCTS } from '../type';

const initialState = [];

const productReducer = (products = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PRODUCTS:
      return payload;
    default:
      return products;
  }
};

export default productReducer;
