import { SET_PRODUCTS, SET_SELECTED_MODULES } from '../type';

import { ProductService } from '../../services';
import { notify, loading } from './response';

import { UserActions } from '../actions';

export const fetchProducts = () => async dispatch => {
  dispatch(loading({ loading: true }));
  try {
    const res = await ProductService.retrieveProducts();

    dispatch(notify({ loading: false }));

    dispatch({
      type: SET_PRODUCTS,
      payload: res.data.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    if (err.response && err.response.status === 401) {
      dispatch(UserActions.signOut());
    }
    // dispatch(notify({ title: err.name, message: err.response?.data?.error || err.message, type: 'danger', loading: false }));
    dispatch(notify({ loading: false }));
    return Promise.reject(err);
  }
};

export const setModules = data => async dispatch => {
  dispatch({
    type: SET_SELECTED_MODULES,
    payload: data,
  });
};

const ProductActions = {
  fetchProducts,
  setModules,
};

export default ProductActions;
