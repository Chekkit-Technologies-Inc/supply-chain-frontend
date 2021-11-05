import { CREATE_WAREHOUSE, FETCH_WAREHOUSES } from '../type';
import { WarehouseService } from '../../services';
import { notify, loading } from './response';

export const createWarehouse = data => async dispatch => {
  dispatch(loading({ loading: true }));
  let list = {
    warehouses: data,
  };
  try {
    const res = await WarehouseService.createWarehouse(list);

    dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    dispatch({
      type: CREATE_WAREHOUSE,
      payload: res.data.data,
    });
    return Promise.resolve(res.data.data);
  } catch (err) {
    dispatch(notify({ title: err.name, message: err.response.data.error, type: 'danger', loading: false }));
    return Promise.reject(err);
  }
};

export const fetchWarehouses = () => async dispatch => {
  dispatch(loading({ loading: true }));
  try {
    const res = await WarehouseService.fetchWarehouses();

    dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    dispatch({
      type: FETCH_WAREHOUSES,
      payload: res.data.data,
    });
    return Promise.resolve(res.data.data);
  } catch (err) {
    dispatch(notify({ title: err.name, message: err.response.data.error, type: 'danger', loading: false }));
    return Promise.reject(err);
  }
};

const WarehouseActions = {
  createWarehouse,
  fetchWarehouses,
};

export default WarehouseActions;
