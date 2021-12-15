import { SET_PRODUCTS, UPDATE_PRODUCT } from '../type';

const initialState = [];

const productReducer = (products = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PRODUCTS:
      return payload;
    case UPDATE_PRODUCT:
      let data = products.map(p => {
        if (p.id === payload.id) {
          let d = { p, ...payload.data };
          return d;
        }
        return p;
      });
      return data;
    default:
      return products;
  }
};

export default productReducer;
