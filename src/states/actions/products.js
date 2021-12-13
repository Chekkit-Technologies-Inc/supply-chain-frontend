import { FETCH_PRODUCTS } from '../type';
import { notify, loading } from './response';

import { ProductService } from '../../services';

export const fetchProducts = () => async dispatch => {
  dispatch(loading({ loading: true }));
  try {
    const res = await ProductService.retrieveProducts();

    dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    dispatch(notify({ title: err.name, message: err.response?.data?.error || err.message, type: 'danger', loading: false }));
    return Promise.reject(err);
  }
};

const ProductActions = {
  fetchProducts,
};

export default ProductActions;
