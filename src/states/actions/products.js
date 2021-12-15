import { SET_PRODUCTS, UPDATE_PRODUCT } from '../type';

export const setProducts = data => async dispatch => {
  dispatch({
    type: SET_PRODUCTS,
    payload: data,
  });
};

export const updateProduct = (id, data) => async dispatch => {
  dispatch({
    type: UPDATE_PRODUCT,
    payload: { id, data },
  });
};

const ProductActions = {
  setProducts,
  updateProduct,
};

export default ProductActions;
