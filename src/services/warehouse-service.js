import http from '../http';

export const createWarehouse = async data => {
  return http().post('/warehouse', data);
};

export const fetchWarehouses = async () => {
  return http().get(`/warehouse`);
};

const WarehouseService = {
  createWarehouse,
  fetchWarehouses,
};

export default WarehouseService;
