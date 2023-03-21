import { SET_PRODUCTS, SET_SELECTED_MODULES } from '../type';

const initialState = { apiModules: [], selectedModules: [] };

const productReducer = (products = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PRODUCTS:
      return { ...products, apiModules: payload };
    case SET_SELECTED_MODULES:
      return { ...products, selectedModules: payload };
    default:
      return products;
  }
};

export default productReducer;
