import { CREATE_SITE, FETCH_SITES } from '../type';
// import { notify, loading } from './response';

export const createSite = data => async dispatch => {
  // dispatch(loading({ loading: true }));
  // let list = {
  //   warehouses: data,
  // };
  // try {
  //   const res = await WarehouseService.createWarehouse(list);

  //   dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

  dispatch({
    type: CREATE_SITE,
    payload: data,
  });
  //   return Promise.resolve(res.data.data);
  // } catch (err) {
  //   dispatch(notify({ title: err.name, message: err.response.data.error, type: 'danger', loading: false }));
  //   return Promise.reject(err);
  // }
};

export const fetchSites = () => async dispatch => {
  // dispatch(loading({ loading: true }));
  // try {
  //   const res = await WarehouseService.fetchWarehouses();

  //   dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

  dispatch({
    type: FETCH_SITES,
  });
  //   return Promise.resolve(res.data.data);
  // } catch (err) {
  //   dispatch(notify({ title: err.name, message: err.response.data.error, type: 'danger', loading: false }));
  //   return Promise.reject(err);
  // }
};

const SiteActions = {
  createSite,
  fetchSites,
};

export default SiteActions;
